------------------------------------------------
-- Query de creación de esquema BD de Ofertas --
------------------------------------------------

-- Comentario general: Ejecutar la siguiente línea de código si se desea conformar la BD desde el pgadmin psql

-- \i 'ruta' Ejemplo: \i 'C:/Users/BD_Ofertas.sql'
-- \i 'C:/Users/DELL/OneDrive/Documentos/Trabajo_IGAC_2023/Repositorio_OIC_Ofertas_2/OIC/BD/Modelos/BD_Ofertas.sql'

-- Comentario general: Ejecutar la siguiente línea de código si se desea conformar la BD desde el psql directamente

-- psql -U postgres -d postgres -a -f "ruta" Ejemplo: psql -U postgres -d postgres -a -f "C:/Users/BD_Ofertas.sql"
-- psql -U postgres -d postgres -a -f "C:/Users/DELL/OneDrive/Documentos/Trabajo_IGAC_2023/Repositorio_OIC_Ofertas_2/OIC/BD/Modelos/BD_Ofertas.sql"

/**
DROP DATABASE IF EXISTS ofertas;

create database ofertas;
\connect ofertas

**/

--*** Conformación relación Oferta ***--

DROP table IF EXISTS public.oferta;

DROP DOMAIN IF EXISTS dom_tipo_oferta;
CREATE DOMAIN dom_tipo_oferta AS CHAR (10)
CONSTRAINT domi_tipo_oferta
CHECK (VALUE IN ('VENTA', 'ARRIENDO'));

DROP DOMAIN IF EXISTS dom_si_valor_incluye_anexidades;
CREATE DOMAIN dom_si_valor_incluye_anexidades AS CHAR (2)
CONSTRAINT domi_si_valor_incluye_anexidades
CHECK (VALUE IN ('Si', 'NO'));

DROP DOMAIN IF EXISTS dom_oferta_origen;
CREATE DOMAIN dom_oferta_origen AS CHAR (15)
CONSTRAINT domi_oferta_origen
CHECK (VALUE IN ('IVP', 'ACTUALIZACIÓN', 'CONSERVACIÓN', 'FORMACIÓN', 'INVESTIGACIÓN'));

create table public.oferta (
	id_oferta								serial,
	FECHA_CAPTURA_OFERTA					date 									not null,
	TIPO_OFERTA									dom_tipo_oferta 					not null,
	SI_VALOR_INCLUYE_ANEXIDADES					dom_si_valor_incluye_anexidades,
	TIEMPO_OFERTA_MERCADO					integer,
	OFERTA_ORIGEN								dom_oferta_origen,
	VALOR_OFERTA_INICIAL					integer 								not null,
	PORCENTAJE_NEGOCIACION					integer									not null,
	VALOR_OFERTA_FINAL						integer									not null,
	VALOR_TERRENO							integer,
	VALOR_CONSTRUCCION_M2					integer,
	VALOR_AREA_PRIVADA						integer,
	VALOR_CULTIVO							integer									not null,
	AVALUO_CATASTRAL						integer,
	VALOR_ADMINISTRACION					integer									not null,
	VALOR_ARRIENDO_INICIAL					integer									not null,
	VALOR_ARRIENDO_FINAL					integer									not null,
	VALOR_TERRAZA_BALCON_PATIO				integer,
	VALOR_GARAJES							integer,
	VALOR_DEPOSITOS							integer,
	VALOR_ANEXIDADES						integer									not null,
	NOMBRE_OFERENTE							varchar(512)							not null,
	NUMERO_CONTACTO							integer									not null,
	URL										varchar(512),
	ENLACE_INTERNO_FOTO_PREDIO				varchar(100),
	ENLACE_DOCUMENTOS						varchar(100),
	OBSERVACIONES							varchar(100)							not null,
	
	primary key(id_oferta)
);

--*** Conformación relación Persona ***--

DROP table IF EXISTS public.persona;

create table public.persona (
	numero_identificacion 	varchar(30),
	tipo_identificacion 	varchar(10),
	id_oferta				bigint,
	
	primary key(numero_identificacion, tipo_identificacion, id_oferta)
);

alter table public.persona
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.persona
add constraint Res_idoferta_persona
foreign key (id_oferta)
references public.oferta (id_oferta);

--*** Conformación relación Dominio ***--

DROP table IF EXISTS public.dominio;

DROP DOMAIN IF EXISTS dom_derecho_tipo;
CREATE DOMAIN dom_derecho_tipo AS CHAR (30)
CONSTRAINT domi_derecho_tipo
CHECK (VALUE IN ('OCUPACION', 'POSESIÓN', 'DERECHO DE DOMINIO O PROPIEDAD'));

create table public.dominio (
	DERECHO_TIPO		 	Dom_derecho_tipo										not null,
	id_oferta				bigint,
	
	primary key(id_oferta)
);

alter table public.dominio
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.dominio
add constraint Res_idoferta_dominio
foreign key (id_oferta)
references public.oferta (id_oferta);

--*** Conformación relación Tenedor ***--

DROP table IF EXISTS public.tenedor;

create table public.tenedor (
	numero_identificacion 	varchar(30),
	tipo_identificacion 	varchar(10),
	id_oferta				bigint,
	
	primary key(numero_identificacion, tipo_identificacion, id_oferta)
);

alter table public.tenedor
add constraint Res_esp_tenedor
foreign key (numero_identificacion, tipo_identificacion, id_oferta)
references public.persona (numero_identificacion, tipo_identificacion, id_oferta);

alter table public.tenedor
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.tenedor
add constraint Res_idoferta_tenedor
foreign key (id_oferta)
references public.oferta (id_oferta);

--*** Conformación relación Perito ***--

DROP table IF EXISTS public.perito;

create table public.perito (
	id_oferta								bigint,
	numero_identificacion 					varchar(30),
	tipo_identificacion 					varchar(10),
	REVISION_PERSONA_RESPONSABLE		 	varchar(100)								not null,
	REVISION_AREA_RESPONSABLE				varchar(100)								not null,
	PROYECTO_EMAIL_PERSONAL					varchar(100)								not null,
	PROYECTO_PERSONA_RESPONSABLE			varchar(100)								not null,
	PROYECTO_AREA_RESPONSABLE				varchar(100)								not null,
	
	primary key(numero_identificacion, tipo_identificacion, id_oferta)
);

alter table public.perito
add constraint Res_esp_perito
foreign key (numero_identificacion, tipo_identificacion, id_oferta)
references public.persona (numero_identificacion, tipo_identificacion, id_oferta);

alter table public.perito
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.perito
add constraint Res_idoferta_perito
foreign key (id_oferta)
references public.oferta (id_oferta);

--*** Conformación relación Inmueble ***--

DROP table IF EXISTS public.inmueble;

DROP DOMAIN IF EXISTS GC_TipoInmueble;
CREATE DOMAIN GC_TipoInmueble AS CHAR (25)
CONSTRAINT domi_tipo_inmueble
CHECK (VALUE IN ('CASA', 'APARTAMENTO', 'BODEGA', 'OFICINA', 'LOCAL_COMERCIAL', 'EDIFICIO', 'LOTE',
				 'FINCA','CASA_CAMPESTRE','CABAÑA','CASA_LOTE','GARAJE_EN_PH','PARQUEADERO_COMERCIAL',
				 'DEPOSITO_EN_PH','OTRO'));
				 
DROP DOMAIN IF EXISTS dom_tipo_predio;
CREATE DOMAIN dom_tipo_predio AS CHAR (25)
CONSTRAINT domi_tipo_predio
CHECK (VALUE IN ('RURAL', 'URBANO', 'CORREGIMIENTO Y CASERIOS'));

DROP DOMAIN IF EXISTS dom_conservacionconstruccion;
CREATE DOMAIN dom_conservacionconstruccion AS CHAR (15)
CONSTRAINT domi_conservacionconstruccion
CHECK (VALUE IN ('BUENO', 'REGULAR', 'MALO', 'NO CLASIFICADO', 'ACUICOLA'));

DROP DOMAIN IF EXISTS LC_DestinacionEconómicaTipo;
CREATE DOMAIN LC_DestinacionEconómicaTipo AS CHAR (50)
CONSTRAINT domi_DestinacionEconómicaTipo
CHECK (VALUE IN ('ACUICOLA', 'AGRICOLA', 'AGROINDUSTRIAL', 'AGROFORESTAL', 'COMERCIAL', 'CULTURAL',
				 'EDUCATIVO', 'FORESTAL', 'HABITACIONAL', 'INDUSTRIAL', 'INFRAESTRUCTURA_ASOCIADA_PRODUCCION_AGROPECUARIA',
				 'INFRAESTRUCTURA_HIDRAULICA', 'INFRAESTRUCTURA_SANEAMIENTO_BASICO', 'INFRAESTRUCTURA_SEGURIDAD', 
				 'INFRAESTRUCTURA_TRANSPORTE', 'INSTITUCIONAL', 'MINERIA_HIDROCARBUROS', 'LOTE_URBANIZABLE_NO_URBANIZADO',
				 'LOTE_URBANIZADO_NO_CONSTRUIDO', 'LOTE_NO_URBANIZABLE', 'PECUARIO', 'RECREACIONAL',
				 'RELIGIOSO', 'SALUBRIDAD', 'SERVICIOS_FUNERARIOS', 'USO_PUBLICO'));
				 
DROP DOMAIN IF EXISTS Dom_tipologia_tipo;
CREATE DOMAIN Dom_tipologia_tipo AS CHAR (30)
CONSTRAINT domi_tipologia_tipo
CHECK (VALUE IN ('RESIDENCIAL.TIPO_1A', 'RESIDENCIAL.TIPO_1B', 'RESIDENCIAL.TIPO_2A', 'RESIDENCIAL.TIPO_2B', 'RESIDENCIAL.TIPO_3A',
				 'RESIDENCIAL.TIPO_3B', 'RESIDENCIAL.TIPO_4A', 'RESIDENCIAL.TIPO_4B', 'RESIDENCIAL.TIPO_5A', 'RESIDENCIAL.TIPO_5B',
				 'RESIDENCIAL.TIPO_6A', 'RESIDENCIAL.TIPO_6B', 'COMERCIAL.BARRIAL_1', 'COMERCIAL.BARRIAL_2', 'COMERCIAL.SECTORIAL_1',
				 'COMERCIAL.SECTORIAL_2', 'COMERCIAL.ESPECIALIZADO_1', 'COMERCIAL.ESPECIALIZADO_2', 'INDUSTRIAL.LIVIANA_1', 
				 'INDUSTRIAL.LIVIANA_2', 'INDUSTRIAL.MEDIANA_1', 'INDUSTRIAL.MEDIANA_2', 'INDUSTRIAL.PESADA_1', 'INDUSTRIAL.PESADA_2', 
				 'OTRO'));
				 
DROP DOMAIN IF EXISTS Dom_Tipo_Cultivo;
CREATE DOMAIN Dom_Tipo_Cultivo AS CHAR (15)
CONSTRAINT domi_Tipo_Cultivo
CHECK (VALUE IN ('PERMANENTE', 'SEMIPERMANENTE', 'TRANSITORIO', 'NO APLICA'));

DROP DOMAIN IF EXISTS Dom_Servicios_Publicos;
CREATE DOMAIN Dom_Servicios_Publicos AS CHAR (30)
CONSTRAINT domi_Servicios_Publicos
CHECK (VALUE IN ('BASICOS MAS COMPLEMENTARIOS', 'BASICOS', 'INCOMPLETOS', 'SIN SERVICIOS'));

DROP DOMAIN IF EXISTS GC_CondicionPredioTipo;
CREATE DOMAIN GC_CondicionPredioTipo AS CHAR (40)
CONSTRAINT domi_CondicionPredioTipo
CHECK (VALUE IN ('NPH', 'PH', 'PH.MATRIZ', 'PH.UNIDAD_PREDIAL','CONDOMINIO','CONDOMINIO.MATRIZ',
				 'CONDOMINIO.UNIDAD_PREDIAL','PARQUE_CEMENTERIO.MATRIZ','PARQUE_CEMENTERIO.UNIDAD_PREDIAL',
				 'VIA','INFORMAL','BIEN_USO_PUBLICO'));

create table public.inmueble (
	id_oferta								bigint,
	NUMERO_PREDIAL_NUEVO					varchar(30),
	NUMERO_PREDIAL_ANTIGUO					varchar(20),
	CODIGO_HOMOLOGADO 						varchar(100),
	DEPARTAMENTO							varchar(2)									not null,
	MUNICIPIO								varchar(5)									not null,
	VEREDA									varchar(100)								not null,
	BARRIO									varchar(100)								not null,
	DIRECCION								varchar(250)								not null,
	LATITUD									decimal(12,7)								not null,
	LONGITUD								decimal(12,7)								not null,
	TIPO_INMUEBLE								GC_TipoInmueble							not null,
	TIPO_PREDIO									dom_tipo_predio							not null,
	PROYECTO_INMOBILIARIO					varchar(2),
	PROYECTO_DESCRIPCION					varchar(100),
	AREA_TERRENO							integer										not null,
	ANO_CONSTRUCCION						integer,
	AREA_CONSTRUCCION						integer										not null,
	CONSERVACION								dom_conservacionconstruccion			not null,
	AREA_PRIVADA							integer										not null,
	DESTINACION_ECONOMICA						LC_DestinacionEconómicaTipo				not null,
	ALTURA_EDIFICIO							integer,
	NUMERO_PISO								integer,
	TIPO_INMUEBLE_RURAL						varchar(100)								not null,
	TIPOLOGIA_TIPO								Dom_tipologia_tipo,
	AREA_CULTIVO							integer,
	EDAD_CULTIVO							integer,
	TIPO_CULTIVO								Dom_Tipo_Cultivo,
	COEFICIENTE								integer,
	SERVICIOS_PUBLICOS							Dom_Servicios_Publicos					not null,
	ESTRATO									integer,
	GARAJES									integer										not null,
	NUMERO_BANOS							integer										not null,
	NUMERO_HABITACIONES						integer										not null,
	NUMERO_DEPOSITOS						integer										not null,
	CONSTRUCCIONES_ANEXAS					varchar(256)								not null,
	MATRICULA_INMOBILIARIA					varchar(100),
	CONDICION_JURIDICA							GC_CondicionPredioTipo					not null,
	
	primary key(id_oferta)
);

alter table public.inmueble
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.inmueble
add constraint Res_idoferta_inmueble
foreign key (id_oferta)
references public.oferta (id_oferta);

