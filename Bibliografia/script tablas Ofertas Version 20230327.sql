-- observatorio.GC_CondicionPredioTipo definition

CREATE TABLE `GC_CondicionPredioTipo` (
  `Condicion_Predio` int(11) NOT NULL,
  `dcpr_nombre` varchar(100) DEFAULT NULL,
  `dcpr_descripcion` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`Condicion_Predio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.GC_TipoInmueble definition

CREATE TABLE `GC_TipoInmueble` (
  `Tipo_de_inmueble_inmobiliario` int(11) NOT NULL,
  `dmti_nombre` varchar(256) DEFAULT NULL,
  `dmti_descripcion` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`Tipo_de_inmueble_inmobiliario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.LC_DestinacionEconomicaTipo definition

CREATE TABLE `LC_DestinacionEconomicaTipo` (
  `Destinacion_Economica` int(11) NOT NULL,
  `dmde_nombre` varchar(256) DEFAULT NULL,
  `dmde_descripcion` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Destinacion_Economica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.LC_UnidadConstruccionTipo definition

CREATE TABLE `LC_UnidadConstruccionTipo` (
  `Tipo_Unidad_Construccion` int(11) NOT NULL,
  `dtuc_nombre` varchar(15) DEFAULT NULL,
  `dtuc_descripcion` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`Tipo_Unidad_Construccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Aplica para predios construidos. Indica si la unidad de construcción es residencial, comercial, industrial o anexo. En caso de tener varios tipos debe indicarse el tipo principal; es decir, el de mayor área.';


-- observatorio.divipola definition

CREATE TABLE `divipola` (
  `DIPO_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DIPO_CODIGODEPARTAMENTO` varchar(2) DEFAULT '00' COMMENT 'Código único asignado por el DANE al departamento',
  `DIPO_CODIGOMUNICIPIO` varchar(5) DEFAULT '00000' COMMENT 'Código único asignado por el DANE al municipio',
  `DIPO_CODIGOCENTROPOBLADO` varchar(8) DEFAULT '00000000' COMMENT 'Código asignado por el DANE para los centros poblados',
  `DIPO_NOMBREDEPARTAMENTO` varchar(100) NOT NULL COMMENT 'Nombre del departamento',
  `DIPO_NOMBREMUNICIPIO` varchar(100) NOT NULL COMMENT 'Nombre del municipio',
  `DIPO_NOMBRECENTROPOBLADO` varchar(100) NOT NULL COMMENT 'Nombre del centro poblado',
  `DIPO_CM` varchar(5) DEFAULT 'CM' COMMENT 'Categoría de la Entidad Territorial',
  `AREA` decimal(30,20) DEFAULT 0.00000000000000000000 COMMENT 'Area del municipio',
  `X` decimal(30,20) DEFAULT 0.00000000000000000000 COMMENT 'Coordenada X',
  `Y` decimal(30,20) DEFAULT 0.00000000000000000000 COMMENT 'Coordenada Y',
  PRIMARY KEY (`DIPO_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9206 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.dom_derecho_tipo definition

CREATE TABLE `dom_derecho_tipo` (
  `derecho_tipo` int(11) NOT NULL,
  `dmti_nombre` varchar(256) DEFAULT NULL,
  `dmti_descripcion` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`derecho_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.dom_destinacion_economica definition

CREATE TABLE `dom_destinacion_economica` (
  `destinacion_economica` int(11) NOT NULL,
  `dmde_nombre` varchar(256) DEFAULT NULL,
  `dmde_descripcion` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`destinacion_economica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.dom_tipo_inmueble definition

CREATE TABLE `dom_tipo_inmueble` (
  `tipo_inmueble` int(11) NOT NULL,
  `dmti_nombre` varchar(256) DEFAULT NULL,
  `dmti_descripcion` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`tipo_inmueble`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.dom_tipo_oferta definition

CREATE TABLE `dom_tipo_oferta` (
  `tipo_oferta` int(11) NOT NULL,
  `dmto_nombre` varchar(256) DEFAULT NULL,
  `dmto_descripcion` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`tipo_oferta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.dom_tipologia_tipo definition

CREATE TABLE `dom_tipologia_tipo` (
  `tipologia_tipo` int(11) NOT NULL,
  `dmtt_nombre` varchar(256) DEFAULT NULL,
  `dmtt_descripcion` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`tipologia_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- observatorio.ofertas definition

CREATE TABLE `ofertas` (
  `ofer_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Identificador unico de la oferta asociada al predio',
  `ofer_tipopredio` varchar(2) DEFAULT NULL COMMENT '00 Rural - 01 Urbano - 02..99 Corregimientos y caserios',
  `ofer_condicionjuridica` int(11) DEFAULT 1 COMMENT '4.Mejora 1.NPH - 2.PH 0.Sin informacion',
  `tipo_inmueble` int(11) DEFAULT NULL COMMENT 'Valores desde dom_tipo_inmueble',
  `numero_predial_antiguo` varchar(20) DEFAULT NULL COMMENT 'Numero predial Antiguo de 20 digitos, ver estructura del numero prediale en la hoja NUMERO_PREDIAL_ANTIGUO',
  `numero_predial_nuevo` varchar(30) DEFAULT NULL COMMENT 'Numero predial nuevo de 30 digitos, ver estructura del numero prediale en la hoja NUMERO_PREDIAL_NUEVO',
  `matricula_inmobiliaria` varchar(100) DEFAULT NULL COMMENT 'Numero de Matricula inmobiliaria',
  `codigo_homologado` varchar(100) DEFAULT NULL COMMENT 'Es un código único para identificar los inmuebles tanto en los sistemas de información catastral como registral',
  `tipo_oferta` int(11) DEFAULT 0 COMMENT 'La clase de oferta corresponde a una oferta de venta o a una oferta de arriendo del predio.',
  `dipo_codigodepartamento` varchar(2) DEFAULT NULL COMMENT 'Codigo DIVIPOLA asignado para el departamento de Colombia donde se encuentra ubicado el Predio',
  `dipo_codigomunicipio` varchar(5) DEFAULT NULL COMMENT 'Codigo DIVIPOLA asignado para el municipio de Colombia donde se encuentra ubicado el Predio',
  `nombre_barrio` varchar(100) DEFAULT NULL COMMENT 'Nombre del barrio aprobado en el acuerdo municipal.',
  `estrato` int(11) DEFAULT NULL COMMENT 'Categoria de estrato del inmueble segun oficina planeacion',
  `direccion` varchar(250) DEFAULT NULL COMMENT 'Dirección del predio.  Para diligenciar este campo debe tener en cuenta la direccion que figura en la base catastral. En caso rural el nombre del predio',
  `valor_arriendo_inicial` int(11) DEFAULT NULL COMMENT 'Valor del arriendo en pesos colombianos y sin separador de miles',
  `valor_arriendo_final` int(11) DEFAULT NULL COMMENT 'Valor oferta final del arriendo',
  `valor_venta_inicial` int(11) DEFAULT NULL COMMENT 'Valor de la oferta en pesos colombianos y sin separador de miles',
  `valor_venta_final` int(11) DEFAULT NULL COMMENT 'Valor de la oferta negociada en pesos colombianos y sin separador de miles',
  `porcentaje_negociacion` int(11) DEFAULT NULL COMMENT 'Para obtener este valor a 1 se le debe restar la division entre el valor negociado y el valor inicial de la oferta',
  `anio_construccion` int(11) DEFAULT NULL COMMENT 'Año de edificación de la construcción.',
  `area_terreno` int(11) DEFAULT 0 COMMENT 'Area del terreno urbano en metros cuadrados - Rural en hectareas',
  `area_construccion` int(11) DEFAULT 0 COMMENT 'Area construida en Metros cuadrados',
  `valor_m2_construccion` int(11) DEFAULT 0 COMMENT 'Valor del metro cuadrado de construcción de acuerdo a la tipologia constructiva, sin separador de miles',
  `valor_m2_terreno` int(11) DEFAULT 0 COMMENT 'Valor del metro cuadrado del terreno sin separador de miles',
  `observaciones` varchar(512) DEFAULT NULL COMMENT 'Descripcion del Inmieble y datos adicionales dados por el oferente.',
  `latitud` decimal(12,7) DEFAULT 0.0000000 COMMENT 'Coordenada Geografica latitud',
  `longitud` decimal(12,7) DEFAULT 0.0000000 COMMENT 'Coordenada Geografica longitud',
  `ofer_conservacionconstruccion` int(11) DEFAULT 0 COMMENT 'Dominio - 0 No clasificado - 1 Bueno - 2 Regular - 4 Malo',
  `fecha_captura_oferta` date DEFAULT curdate() COMMENT 'Año, mes y día de captura de la oferta en campo.',
  `tiempo_oferta_mercado` int(11) DEFAULT 0 COMMENT 'Número de meses de la publicación de la oferta en el mercado inmobiliario',
  `numero_contacto_oferente` varchar(512) DEFAULT NULL COMMENT 'Número de teléfono fijo o número celular de la persona que está publicitando el bien inmueble.',
  `nombre_oferente` varchar(512) DEFAULT NULL COMMENT 'Nombre completo de la persona que está vendiendo o arrendando el inmueble. Para las personas naturales se ingresa primeros los nombres y luego los apellidos, y para las personas jurídicas se ingresa la razón social.',
  `avaluo_catastral` int(11) DEFAULT NULL COMMENT 'Valor catastral del predio reportado en la base catastral vigente en caso de existir',
  `destinacion_economica` int(11) DEFAULT 0 COMMENT 'Es la clasificación para fines estadísticos que se da a cada inmueble en su conjunto–terreno, construcciones o edificaciones-, en el momento de la identificación predial de conformidad con la actividad predominante que en él se desarrolle.',
  `derecho_tipo` int(11) DEFAULT NULL COMMENT 'Derecho que se ejerce sobre el predio',
  `tipologia_tipo` int(11) DEFAULT 0 COMMENT 'Son las características de diseño y constructivas especiales de las construcciones y/o edificaciones',
  `valor_administracion` int(11) DEFAULT 0 COMMENT 'PH Dirección del predio, para diligenciar este campo debe tener en cuenta las caracteristicas de las direcciones y cada uno de los apectos generadores que se enumeran en la observacion Ext_Direccion',
  `altura_edificio` int(11) DEFAULT NULL COMMENT 'PH Altura total de la construcción.',
  `numero_piso` int(11) DEFAULT 1 COMMENT 'PH Numero de piso dentro de la torre o edificio donde esta ubicado el apartamento en ph',
  `area_privada` int(11) DEFAULT 0 COMMENT 'PH Area privada en metros cuadrados',
  `numero_garajes` int(11) DEFAULT 0 COMMENT 'PH Cantidad de Garajes disponibles',
  `ofer_numerobanos` int(11) DEFAULT NULL COMMENT 'Numero de baños',
  `ofer_numerohabitaciones` int(11) DEFAULT NULL COMMENT 'Numero de habitaciones',
  `numero_depositos` int(11) DEFAULT NULL COMMENT 'PH Cantidad de depositos disponibles',
  `valor_terraza_balcon_patio` int(11) DEFAULT NULL COMMENT 'PH Valor en pesos colombianos sin separador de miles de la terraza, balcon y/o patio',
  `valor_garajes` int(11) DEFAULT NULL COMMENT 'PH Valor en pesos colombianos sin separador de miles del o los garajes',
  `valor_depositos` int(11) DEFAULT NULL COMMENT 'PH Valor en pesos colombianos, sin separador de miles del o los depositos',
  `coeficiente` int(11) DEFAULT NULL COMMENT 'PH Coeficiente de copropiedad de la unidad predial.',
  `nombre_vereda` varchar(100) DEFAULT '' COMMENT 'Rural Nombre de la vereda aprobado en el acuerdo municipal.',
  `tipo_inmueble_rural` varchar(100) DEFAULT '' COMMENT 'Rural Clasifique el tipo de inmueble rural al cual corresponde la oferta (ejemplo finca de vacaciones, forestal, agropecuaria etc)',
  `valor_ha_terreno` int(11) DEFAULT 0 COMMENT 'Rural Valor de la hectarea del terreno sin separador de miles',
  `tipo_cultivos` varchar(256) DEFAULT NULL COMMENT 'Rural Escriba el cultivo o los cultivos que se presentan dentro del terreno',
  `construcciones_anexas` varchar(256) DEFAULT NULL COMMENT 'Rural Escriba las construcciones anexas que tenga el inmueble como piscinas, canchas de futbol, baloncesto o voleybol, etc',
  `proyecto_inmobiliario` varchar(2) DEFAULT 'NO' COMMENT 'Nombre del proyecto - sala de ventas - constructura',
  `ofer_isValorincluyeotrosanexidades` int(11) DEFAULT 0 COMMENT 'PH 0. No 1. Si el valor reportado incluye valores de parqueaderos depositos u otras anexidades',
  `proyecto_descripcion` varchar(100) DEFAULT NULL COMMENT 'Breve descripcion del proyecto (Cantidada de unidades - usos y amenidades )',
  `ofer_url` varchar(250) DEFAULT NULL COMMENT 'Enlace de la oferta',
  `ofer_enlaceinternofotopredio` varchar(100) DEFAULT NULL COMMENT 'Url del sharepoint con las fotos de la oferta',
  `ofer_enlacedocumentos` varchar(100) DEFAULT NULL COMMENT 'Url del sharepoint donde reposa imagenes de los documentos',
  `ofer_proyecto_origen` varchar(100) DEFAULT '0' COMMENT 'Dominio con valores: ivp, actualizacion, conservacion, formacion, investigacion',
  `ofer_proyecto_area_responsable` varchar(100) DEFAULT '0' COMMENT 'Dominio con valores: Observatorio Subdireccion de proyectos Subdireccion de Avaluos, direccion territorial, empresas contratistas',
  `ofer_proyecto_personaresponsable` varchar(100) DEFAULT '' COMMENT 'Nombre y apellido de la persona que capturo la oferta',
  `ofer_proyecto_emailpersonal` varchar(100) DEFAULT '' COMMENT 'Email personal del funcionario que realizo el proyecto',
  `ofer_revision_area_responsable` varchar(100) DEFAULT '' COMMENT 'Nombre del area responsable de la primera revision',
  `ofer_revision_personaresponsable` varchar(100) DEFAULT '' COMMENT 'Nombre y apellido de persona que reviso la oferta',
  PRIMARY KEY (`ofer_id`),
  KEY `ofertas_FK` (`tipo_oferta`),
  KEY `ofertas_FK_1` (`destinacion_economica`),
  KEY `ofertas_FK_2` (`derecho_tipo`),
  KEY `ofertas_FK_3` (`tipologia_tipo`),
  KEY `ofertas_FK_4` (`tipo_inmueble`),
  CONSTRAINT `ofertas_FK` FOREIGN KEY (`tipo_oferta`) REFERENCES `dom_tipo_oferta` (`tipo_oferta`) ON UPDATE CASCADE,
  CONSTRAINT `ofertas_FK_1` FOREIGN KEY (`destinacion_economica`) REFERENCES `LC_DestinacionEconomicaTipo` (`Destinacion_Economica`) ON UPDATE CASCADE,
  CONSTRAINT `ofertas_FK_2` FOREIGN KEY (`derecho_tipo`) REFERENCES `dom_derecho_tipo` (`derecho_tipo`) ON UPDATE CASCADE,
  CONSTRAINT `ofertas_FK_3` FOREIGN KEY (`tipologia_tipo`) REFERENCES `dom_tipologia_tipo` (`tipologia_tipo`) ON UPDATE CASCADE,
  CONSTRAINT `ofertas_FK_4` FOREIGN KEY (`tipo_inmueble`) REFERENCES `GC_TipoInmueble` (`Tipo_de_inmueble_inmobiliario`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



