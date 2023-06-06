-----------------------------------------------------------------------
-- Query de creación de esquema BD de Ofertas con base en las vistas --
-----------------------------------------------------------------------

-- Comentario general: Ejecutar la siguiente línea de código si se desea conformar la BD desde el pgadmin psql

-- \i 'ruta' Ejemplo: \i 'C:/Users/DELL/Documents/Trabajo_IGAC_2023/Front_Angular_Ofertas/OIC/BD/Modelos/BD_Ofertas_Vistas.sql'
-- \i 'C:/Users/DELL/Documents/Trabajo_IGAC_2023/Front_Angular_Ofertas/OIC/BD/Modelos/BD_Ofertas_Vistas.sql'

-- Comentario general: Ejecutar la siguiente línea de código si se desea conformar la BD desde el psql directamente

-- psql -U postgres -d postgres -a -f "ruta" Ejemplo: psql -U postgres -d postgres -a -f "C:/Users/BD_Ofertas_Vistas.sql"
-- psql -U postgres -d postgres -a -f "C:/Users/DELL/Documents/Trabajo_IGAC_2023/Front_Angular_Ofertas/OIC/BD/Modelos/BD_Ofertas_Vistas.sql"



DROP DATABASE IF EXISTS ofertas_vistas;

create database ofertas_vistas;
\connect ofertas_vistas



-- Conformación de la relación vista 1 (pre_iden) --

CREATE SEQUENCE id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

DROP table IF EXISTS public.pre_iden;

DROP DOMAIN IF EXISTS dom_tipo_oferta;
CREATE DOMAIN dom_tipo_oferta AS CHAR (10)
CONSTRAINT domi_tipo_oferta
CHECK (VALUE IN ('VENTA', 'ARRIENDO'));

DROP DOMAIN IF EXISTS dom_oferta_origen;
CREATE DOMAIN dom_oferta_origen AS CHAR (15)
CONSTRAINT domi_oferta_origen
CHECK (VALUE IN ('IVP', 'ACTUALIZACIÓN', 'CONSERVACIÓN', 'FORMACIÓN', 'INVESTIGACIÓN'));

DROP DOMAIN IF EXISTS dom_tipo_predio;
CREATE DOMAIN dom_tipo_predio AS CHAR (25)
CONSTRAINT domi_tipo_predio
CHECK (VALUE IN ('RURAL', 'URBANO', 'CORREGIMIENTO Y CASERIOS'));

DROP DOMAIN IF EXISTS GC_CondicionPredioTipo;
CREATE DOMAIN GC_CondicionPredioTipo AS CHAR (40)
CONSTRAINT domi_CondicionPredioTipo
CHECK (VALUE IN ('NPH', 'PH', 'PH.MATRIZ', 'PH.UNIDAD_PREDIAL','CONDOMINIO','CONDOMINIO.MATRIZ',
				 'CONDOMINIO.UNIDAD_PREDIAL','PARQUE_CEMENTERIO.MATRIZ','PARQUE_CEMENTERIO.UNIDAD_PREDIAL',
				 'VIA','INFORMAL','BIEN_USO_PUBLICO'));

create table public.pre_iden (
	id_oferta								bigint NOT NULL DEFAULT nextval('id_seq'::regclass),
	NUMERO_PREDIAL_NUEVO					varchar(30)									,
	NUMERO_PREDIAL_ANTIGUO					varchar(20)									,
	TIPO_OFERTA								dom_tipo_oferta 							,
	OFERTA_ORIGEN							dom_oferta_origen							,
	CODIGO_HOMOLOGADO 						varchar(100)								,
	TIPO_PREDIO								dom_tipo_predio								,
	MATRICULA_INMOBILIARIA					varchar(100)								,
	CONDICION_JURIDICA						GC_CondicionPredioTipo						,
	ESTADO_OFERTA							smallint									,
	OBS_VERIFICA							varchar(500)								,
	
	primary key(id_oferta)
);

-- Conformación de la relación vista 2 (pre_loca) --

DROP table IF EXISTS public.pre_loca;

create table public.pre_loca (
	id_oferta								bigint										not null,
	DEPARTAMENTO							varchar(2)									,
	MUNICIPIO								varchar(5)									,
	VEREDA									varchar(100)								,
	BARRIO									varchar(100)								,
	DIRECCION								varchar(250)								,
	LATITUD									decimal(12,7)								,
	LONGITUD								decimal(12,7)								,
	
	primary key(id_oferta)
);

alter table public.pre_loca
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.pre_loca
add constraint Res_idoferta_pre_loca
foreign key (id_oferta)
references public.pre_iden (id_oferta);

-- Conformación de la relación vista 3 (pre_gene) --

DROP table IF EXISTS public.pre_gene;

DROP DOMAIN IF EXISTS dom_si_valor_incluye_anexidades;
CREATE DOMAIN dom_si_valor_incluye_anexidades AS CHAR (2)
CONSTRAINT domi_si_valor_incluye_anexidades
CHECK (VALUE IN ('Si', 'NO'));

DROP DOMAIN IF EXISTS GC_TipoInmueble;
CREATE DOMAIN GC_TipoInmueble AS CHAR (25)
CONSTRAINT domi_tipo_inmueble
CHECK (VALUE IN ('CASA', 'APARTAMENTO', 'BODEGA', 'OFICINA', 'LOCAL_COMERCIAL', 'EDIFICIO', 'LOTE',
				 'FINCA','CASA_CAMPESTRE','CABAÑA','CASA_LOTE','GARAJE_EN_PH','PARQUEADERO_COMERCIAL',
				 'DEPOSITO_EN_PH','OTRO'));

DROP DOMAIN IF EXISTS dom_derecho_tipo;
CREATE DOMAIN dom_derecho_tipo AS CHAR (30)
CONSTRAINT domi_derecho_tipo
CHECK (VALUE IN ('OCUPACION', 'POSESIÓN', 'DERECHO DE DOMINIO O PROPIEDAD'));

create table public.pre_gene( 
	id_oferta								bigint										not null,
	FECHA_CAPTURA_OFERTA					date 										,
	SI_VALOR_INCLUYE_ANEXIDADES				dom_si_valor_incluye_anexidades				,
	TIEMPO_OFERTA_MERCADO					integer										,
	TIPO_INMUEBLE							GC_TipoInmueble								,
	PROYECTO_INMOBILIARIO					varchar(2)									,
	PROYECTO_DESCRIPCION					varchar(100)								,
	DERECHO_TIPO		 					Dom_derecho_tipo							,
	
	primary key(id_oferta)
);

alter table public.pre_gene
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.pre_gene
add constraint Res_idoferta_pre_gene
foreign key (id_oferta)
references public.pre_iden (id_oferta);

-- Conformación de la relación vista 4 (pre_fisi) --

DROP table IF EXISTS public.pre_fisi;

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

create table public.pre_fisi(
	id_oferta								bigint										not null,
	AREA_TERRENO							integer										,
	ANO_CONSTRUCCION						integer										,
	AREA_CONSTRUCCION						integer										,
	CONSERVACION							dom_conservacionconstruccion				,
	AREA_PRIVADA							integer										,
	DESTINACION_ECONOMICA					LC_DestinacionEconómicaTipo					,
	ALTURA_EDIFICIO							integer										,
	NUMERO_PISO								integer										,
	AREA_CULTIVO							integer										,
	TIPO_INMUEBLE_RURAL						varchar(100)								,
	TIPOLOGIA_TIPO							Dom_tipologia_tipo							,
	EDAD_CULTIVO							integer										,
	TIPO_CULTIVO							Dom_Tipo_Cultivo							,
	COEFICIENTE								integer										,
	SERVICIOS_PUBLICOS						Dom_Servicios_Publicos						,
	ESTRATO									integer										,
	GARAJES									integer										,
	NUMERO_BANOS							integer										,
	NUMERO_HABITACIONES						integer										,
	NUMERO_DEPOSITOS						integer										,
	CONSTRUCCIONES_ANEXAS					varchar(256)								,
	
	primary key(id_oferta)
);

alter table public.pre_fisi
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.pre_fisi
add constraint Res_idoferta_pre_fisi
foreign key (id_oferta)
references public.pre_iden (id_oferta);

-- Conformación de la relación vista 5 (pre_econo) --

DROP table IF EXISTS public.pre_econo;

create table public.pre_econo(
	id_oferta								bigint										not null,
	VALOR_OFERTA_INICIAL					integer 									,
	PORCENTAJE_NEGOCIACION					integer										,
	VALOR_OFERTA_FINAL						integer										,
	VALOR_TERRENO							integer										,
	VALOR_CONSTRUCCION_M2					integer										,
	VALOR_AREA_PRIVADA						integer										,
	VALOR_CULTIVO							integer										,
	AVALUO_CATASTRAL						integer										,
	VALOR_ADMINISTRACION					integer										,
	VALOR_ARRIENDO_INICIAL					integer										,
	VALOR_ARRIENDO_FINAL					integer										,
	VALOR_TERRAZA_BALCON_PATIO				integer										,
	VALOR_GARAJES							integer										,
	VALOR_DEPOSITOS							integer										,
	VALOR_ANEXIDADES						integer										,
	
	primary key(id_oferta)
);

alter table public.pre_econo
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.pre_econo
add constraint Res_idoferta_pre_econo
foreign key (id_oferta)
references public.pre_iden (id_oferta);

-- Conformación de la relación vista 6 (info_fuente) --

DROP table IF EXISTS public.info_fuente;

create table public.info_fuente(
	id_oferta								bigint										not null,
	NOMBRE_OFERENTE							varchar(512)								,
	NUMERO_CONTACTO							integer										,
	URL										varchar(512)								,
	ENLACE_INTERNO_FOTO_PREDIO				varchar(100)								,
	ENLACE_DOCUMENTOS						varchar(100)								,
	OBSERVACIONES							varchar(100)								,
	
	primary key(id_oferta)
);

alter table public.info_fuente
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.info_fuente
add constraint Res_idoferta_info_fuente
foreign key (id_oferta)
references public.pre_iden (id_oferta);

-- Conformación de la relación vista 7 (info_admin) --

DROP table IF EXISTS public.info_admin;

create table public.info_admin(
	id_oferta								bigint										not null,
	REVISION_PERSONA_RESPONSABLE		 	varchar(100)								,
	REVISION_AREA_RESPONSABLE				varchar(100)								,
	PROYECTO_EMAIL_PERSONAL					varchar(100)								,
	PROYECTO_PERSONA_RESPONSABLE			varchar(100)								,
	PROYECTO_AREA_RESPONSABLE				varchar(100)								,
	TI_PERSONA_CAPTURA						varchar(50)									,
	NI_PERSONA_CAPTURA						bigint										,
	TI_PERSONA_VERIFICA						varchar(50)									,
	NI_PERSONA_VERIFICA						bigint										,
	
	primary key(id_oferta)
);

alter table public.info_admin
add constraint No_menor_cero_oferta
check (id_oferta>0);

alter table public.info_admin
add constraint Res_idoferta_info_admin
foreign key (id_oferta)
references public.pre_iden (id_oferta);


