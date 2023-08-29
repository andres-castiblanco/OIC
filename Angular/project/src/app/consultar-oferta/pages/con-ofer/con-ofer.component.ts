import { Component } from '@angular/core';

import { ApiService } from '../../../servicios/api/api.service';
import { ValrelacionesService } from '../../../servicios/valrelaciones/valrelaciones.service';
import {
  consulOferI,
  consulLocPreIDir,
} from '../../../modelos/consulta-oferta.interface';
import { resconsulOferI } from '../../../modelos/res-consulta-oferta.interface';
import { ConsultaService } from '../../../servicios/consulta/consulta.service';
import { EditarService } from '../../../servicios/editar/editar.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../../components/dialogs/dialogs.component';

import { Router } from '@angular/router';
import { ResEditOferI } from 'src/app/modelos/res-editar-oferta.interface';

@Component({
  selector: 'app-con-ofer',
  templateUrl: './con-ofer.component.html',
  styleUrls: ['./con-ofer.component.css'],
})
export class ConOferComponent {
  constructor(
    private fb: FormBuilder,
    public consultaService: ConsultaService,
    private api: ApiService,
    public dialog: MatDialog,
    public valrelacionesService: ValrelacionesService,
    private router: Router,
    public editar: EditarService
  ) {}

  get id_oferta() {
    return this.formConsul.get('id_oferta') as FormControl;
  }

  get numprenue() {
    return this.formConsul.get('numprenue') as FormControl;
  }

  get numpreant() {
    return this.formConsul.get('numpreant') as FormControl;
  }

  get matrinmb() {
    return this.formConsul.get('matrinmb') as FormControl;
  }

  get dep() {
    return this.formConsul.get('dep') as FormControl;
  }

  get mun() {
    return this.formConsul.get('mun') as FormControl;
  }

  get feccapofer() {
    return this.formConsul.get('feccapofer') as FormControl;
  }

  get dirrur() {
    return this.formConsul.get('dirrur') as FormControl;
  }

  get dir01() {
    return this.formConsul.get('dir01') as FormControl;
  }

  get dir02() {
    return this.formConsul.get('dir02') as FormControl;
  }

  get dir03() {
    return this.formConsul.get('dir03') as FormControl;
  }

  get dir04() {
    return this.formConsul.get('dir04') as FormControl;
  }

  get dir05() {
    return this.formConsul.get('dir05') as FormControl;
  }

  get dir06() {
    return this.formConsul.get('dir06') as FormControl;
  }

  get dir07() {
    return this.formConsul.get('dir07') as FormControl;
  }

  get dir08() {
    return this.formConsul.get('dir08') as FormControl;
  }

  deptosMpios = {
    '05 ANTIOQUIA': [
      '05001 MEDELLÍN',
      '05002 ABEJORRAL',
      '05004 ABRIAQUÍ',
      '05021 ALEJANDRÍA',
      '05030 AMAGÁ',
      '05031 AMALFI',
      '05034 ANDES',
      '05036 ANGELÓPOLIS',
      '05038 ANGOSTURA',
      '05040 ANORÍ',
      '05042 SANTA FÉ DE ANTIOQUIA',
      '05044 ANZÁ',
      '05045 APARTADÓ',
      '05051 ARBOLETES',
      '05055 ARGELIA',
      '05059 ARMENIA',
      '05079 BARBOSA',
      '05086 BELMIRA',
      '05088 BELLO',
      '05091 BETANIA',
      '05093 BETULIA',
      '05101 CIUDAD BOLÍVAR',
      '05107 BRICEÑO',
      '05113 BURITICÁ',
      '05120 CÁCERES',
      '05125 CAICEDO',
      '05129 CALDAS',
      '05134 CAMPAMENTO',
      '05138 CAÑASGORDAS',
      '05142 CARACOLÍ',
      '05145 CARAMANTA',
      '05147 CAREPA',
      '05148 EL CARMEN DE VIBORAL',
      '05150 CAROLINA',
      '05154 CAUCASIA',
      '05172 CHIGORODÓ',
      '05190 CISNEROS',
      '05197 COCORNÁ',
      '05206 CONCEPCIÓN',
      '05209 CONCORDIA',
      '05212 COPACABANA',
      '05234 DABEIBA',
      '05237 DONMATÍAS',
      '05240 EBÉJICO',
      '05250 EL BAGRE',
      '05264 ENTRERRÍOS',
      '05266 ENVIGADO',
      '05282 FREDONIA',
      '05284 FRONTINO',
      '05306 GIRALDO',
      '05308 GIRARDOTA',
      '05310 GÓMEZ PLATA',
      '05313 GRANADA',
      '05315 GUADALUPE',
      '05318 GUARNE',
      '05321 GUATAPÉ',
      '05347 HELICONIA',
      '05353 HISPANIA',
      '05360 ITAGÜÍ',
      '05361 ITUANGO',
      '05364 JARDÍN',
      '05368 JERICÓ',
      '05376 LA CEJA',
      '05380 LA ESTRELLA',
      '05390 LA PINTADA',
      '05400 LA UNIÓN',
      '05411 LIBORINA',
      '05425 MACEO',
      '05440 MARINILLA',
      '05467 MONTEBELLO',
      '05475 MURINDÓ',
      '05480 MUTATÁ',
      '05483 NARIÑO',
      '05490 NECOCLÍ',
      '05495 NECHÍ',
      '05501 OLAYA',
      '05541 PEÑOL',
      '05543 PEQUE',
      '05576 PUEBLORRICO',
      '05579 PUERTO BERRÍO',
      '05585 PUERTO NARE',
      '05591 PUERTO TRIUNFO',
      '05604 REMEDIOS',
      '05607 RETIRO',
      '05615 RIONEGRO',
      '05628 SABANALARGA',
      '05631 SABANETA',
      '05642 SALGAR',
      '05647 SAN ANDRÉS DE CUERQUÍA',
      '05649 SAN CARLOS',
      '05652 SAN FRANCISCO',
      '05656 SAN JERÓNIMO',
      '05658 SAN JOSÉ DE LA MONTAÑA',
      '05659 SAN JUAN DE URABÁ',
      '05660 SAN LUIS',
      '05664 SAN PEDRO DE LOS MILAGROS',
      '05665 SAN PEDRO DE URABÁ',
      '05667 SAN RAFAEL',
      '05670 SAN ROQUE',
      '05674 SAN VICENTE FERRER',
      '05679 SANTA BÁRBARA',
      '05686 SANTA ROSA DE OSOS',
      '05690 SANTO DOMINGO',
      '05697 EL SANTUARIO',
      '05736 SEGOVIA',
      '05756 SONSÓN',
      '05761 SOPETRÁN',
      '05789 TÁMESIS',
      '05790 TARAZÁ',
      '05792 TARSO',
      '05809 TITIRIBÍ',
      '05819 TOLEDO',
      '05837 TURBO',
      '05842 URAMITA',
      '05847 URRAO',
      '05854 VALDIVIA',
      '05856 VALPARAÍSO',
      '05858 VEGACHÍ',
      '05861 VENECIA',
      '05873 VIGÍA DEL FUERTE',
      '05885 YALÍ',
      '05887 YARUMAL',
      '05890 YOLOMBÓ',
      '05893 YONDÓ',
      '05895 ZARAGOZA',
    ],
    '08 ATLÁNTICO': [
      '08001 BARRANQUILLA',
      '08078 BARANOA',
      '08137 CAMPO DE LA CRUZ',
      '08141 CANDELARIA',
      '08296 GALAPA',
      '08372 JUAN DE ACOSTA',
      '08421 LURUACO',
      '08433 MALAMBO',
      '08436 MANATÍ',
      '08520 PALMAR DE VARELA',
      '08549 PIOJÓ',
      '08558 POLONUEVO',
      '08560 PONEDERA',
      '08573 PUERTO COLOMBIA',
      '08606 REPELÓN',
      '08634 SABANAGRANDE',
      '08638 SABANALARGA',
      '08675 SANTA LUCÍA',
      '08685 SANTO TOMÁS',
      '08758 SOLEDAD',
      '08770 SUAN',
      '08832 TUBARÁ',
      '08849 USIACURÍ',
    ],
    '11 BOGOTÁ, D.C.': ['11001 BOGOTÁ, D.C.'],
    '13 BOLÍVAR': [
      '13001 CARTAGENA DE INDIAS',
      '13006 ACHÍ',
      '13030 ALTOS DEL ROSARIO',
      '13042 ARENAL',
      '13052 ARJONA',
      '13062 ARROYOHONDO',
      '13074 BARRANCO DE LOBA',
      '13140 CALAMAR',
      '13160 CANTAGALLO',
      '13188 CICUCO',
      '13212 CÓRDOBA',
      '13222 CLEMENCIA',
      '13244 EL CARMEN DE BOLÍVAR',
      '13248 EL GUAMO',
      '13268 EL PEÑÓN',
      '13300 HATILLO DE LOBA',
      '13430 MAGANGUÉ',
      '13433 MAHATES',
      '13440 MARGARITA',
      '13442 MARÍA LA BAJA',
      '13458 MONTECRISTO',
      '13468 SANTA CRUZ DE MOMPOX',
      '13473 MORALES',
      '13490 NOROSÍ',
      '13549 PINILLOS',
      '13580 REGIDOR',
      '13600 RÍO VIEJO',
      '13620 SAN CRISTÓBAL',
      '13647 SAN ESTANISLAO',
      '13650 SAN FERNANDO',
      '13654 SAN JACINTO',
      '13655 SAN JACINTO DEL CAUCA',
      '13657 SAN JUAN NEPOMUCENO',
      '13667 SAN MARTÍN DE LOBA',
      '13670 SAN PABLO',
      '13673 SANTA CATALINA',
      '13683 SANTA ROSA',
      '13688 SANTA ROSA DEL SUR',
      '13744 SIMITÍ',
      '13760 SOPLAVIENTO',
      '13780 TALAIGUA NUEVO',
      '13810 TIQUISIO',
      '13836 TURBACO',
      '13838 TURBANÁ',
      '13873 VILLANUEVA',
      '13894 ZAMBRANO',
    ],
    '15 BOYACÁ': [
      '15001 TUNJA',
      '15022 ALMEIDA',
      '15047 AQUITANIA',
      '15051 ARCABUCO',
      '15087 BELÉN',
      '15090 BERBEO',
      '15092 BETÉITIVA',
      '15097 BOAVITA',
      '15104 BOYACÁ',
      '15106 BRICEÑO',
      '15109 BUENAVISTA',
      '15114 BUSBANZÁ',
      '15131 CALDAS',
      '15135 CAMPOHERMOSO',
      '15162 CERINZA',
      '15172 CHINAVITA',
      '15176 CHIQUINQUIRÁ',
      '15180 CHISCAS',
      '15183 CHITA',
      '15185 CHITARAQUE',
      '15187 CHIVATÁ',
      '15189 CIÉNEGA',
      '15204 CÓMBITA',
      '15212 COPER',
      '15215 CORRALES',
      '15218 COVARACHÍA',
      '15223 CUBARÁ',
      '15224 CUCAITA',
      '15226 CUÍTIVA',
      '15232 CHÍQUIZA',
      '15236 CHIVOR',
      '15238 DUITAMA',
      '15244 EL COCUY',
      '15248 EL ESPINO',
      '15272 FIRAVITOBA',
      '15276 FLORESTA',
      '15293 GACHANTIVÁ',
      '15296 GÁMEZA',
      '15299 GARAGOA',
      '15317 GUACAMAYAS',
      '15322 GUATEQUE',
      '15325 GUAYATÁ',
      '15332 GÜICÁN DE LA SIERRA',
      '15362 IZA',
      '15367 JENESANO',
      '15368 JERICÓ',
      '15377 LABRANZAGRANDE',
      '15380 LA CAPILLA',
      '15401 LA VICTORIA',
      '15403 LA UVITA',
      '15407 VILLA DE LEYVA',
      '15425 MACANAL',
      '15442 MARIPÍ',
      '15455 MIRAFLORES',
      '15464 MONGUA',
      '15466 MONGUÍ',
      '15469 MONIQUIRÁ',
      '15476 MOTAVITA',
      '15480 MUZO',
      '15491 NOBSA',
      '15494 NUEVO COLÓN',
      '15500 OICATÁ',
      '15507 OTANCHE',
      '15511 PACHAVITA',
      '15514 PÁEZ',
      '15516 PAIPA',
      '15518 PAJARITO',
      '15522 PANQUEBA',
      '15531 PAUNA',
      '15533 PAYA',
      '15537 PAZ DE RÍO',
      '15542 PESCA',
      '15550 PISBA',
      '15572 PUERTO BOYACÁ',
      '15580 QUÍPAMA',
      '15599 RAMIRIQUÍ',
      '15600 RÁQUIRA',
      '15621 RONDÓN',
      '15632 SABOYÁ',
      '15638 SÁCHICA',
      '15646 SAMACÁ',
      '15660 SAN EDUARDO',
      '15664 SAN JOSÉ DE PARE',
      '15667 SAN LUIS DE GACENO',
      '15673 SAN MATEO',
      '15676 SAN MIGUEL DE SEMA',
      '15681 SAN PABLO DE BORBUR',
      '15686 SANTANA',
      '15690 SANTA MARÍA',
      '15693 SANTA ROSA DE VITERBO',
      '15696 SANTA SOFÍA',
      '15720 SATIVANORTE',
      '15723 SATIVASUR',
      '15740 SIACHOQUE',
      '15753 SOATÁ',
      '15755 SOCOTÁ',
      '15757 SOCHA',
      '15759 SOGAMOSO',
      '15761 SOMONDOCO',
      '15762 SORA',
      '15763 SOTAQUIRÁ',
      '15764 SORACÁ',
      '15774 SUSACÓN',
      '15776 SUTAMARCHÁN',
      '15778 SUTATENZA',
      '15790 TASCO',
      '15798 TENZA',
      '15804 TIBANÁ',
      '15806 TIBASOSA',
      '15808 TINJACÁ',
      '15810 TIPACOQUE',
      '15814 TOCA',
      '15816 TOGÜÍ',
      '15820 TÓPAGA',
      '15822 TOTA',
      '15832 TUNUNGUÁ',
      '15835 TURMEQUÉ',
      '15837 TUTA',
      '15839 TUTAZÁ',
      '15842 ÚMBITA',
      '15861 VENTAQUEMADA',
      '15879 VIRACACHÁ',
      '15897 ZETAQUIRA',
    ],
    '17 CALDAS': [
      '17001 MANIZALES',
      '17013 AGUADAS',
      '17042 ANSERMA',
      '17050 ARANZAZU',
      '17088 BELALCÁZAR',
      '17174 CHINCHINÁ',
      '17272 FILADELFIA',
      '17380 LA DORADA',
      '17388 LA MERCED',
      '17433 MANZANARES',
      '17442 MARMATO',
      '17444 MARQUETALIA',
      '17446 MARULANDA',
      '17486 NEIRA',
      '17495 NORCASIA',
      '17513 PÁCORA',
      '17524 PALESTINA',
      '17541 PENSILVANIA',
      '17614 RIOSUCIO',
      '17616 RISARALDA',
      '17653 SALAMINA',
      '17662 SAMANÁ',
      '17665 SAN JOSÉ',
      '17777 SUPÍA',
      '17867 VICTORIA',
      '17873 VILLAMARÍA',
      '17877 VITERBO',
    ],
    '18 CAQUETÁ': [
      '18001 FLORENCIA',
      '18029 ALBANIA',
      '18094 BELÉN DE LOS ANDAQUÍES',
      '18150 CARTAGENA DEL CHAIRÁ',
      '18205 CURILLO',
      '18247 EL DONCELLO',
      '18256 EL PAUJÍL',
      '18410 LA MONTAÑITA',
      '18460 MILÁN',
      '18479 MORELIA',
      '18592 PUERTO RICO',
      '18610 SAN JOSÉ DEL FRAGUA',
      '18753 SAN VICENTE DEL CAGUÁN',
      '18756 SOLANO',
      '18785 SOLITA',
      '18860 VALPARAÍSO',
    ],
    '19 CAUCA': [
      '19001 POPAYÁN',
      '19022 ALMAGUER',
      '19050 ARGELIA',
      '19075 BALBOA',
      '19100 BOLÍVAR',
      '19110 BUENOS AIRES',
      '19130 CAJIBÍO',
      '19137 CALDONO',
      '19142 CALOTO',
      '19212 CORINTO',
      '19256 EL TAMBO',
      '19290 FLORENCIA',
      '19300 GUACHENÉ',
      '19318 GUAPI',
      '19355 INZÁ',
      '19364 JAMBALÓ',
      '19392 LA SIERRA',
      '19397 LA VEGA',
      '19418 LÓPEZ DE MICAY',
      '19450 MERCADERES',
      '19455 MIRANDA',
      '19473 MORALES',
      '19513 PADILLA',
      '19517 PÁEZ',
      '19532 PATÍA',
      '19533 PIAMONTE',
      '19548 PIENDAMÓ - TUNÍA',
      '19573 PUERTO TEJADA',
      '19585 PURACÉ',
      '19622 ROSAS',
      '19693 SAN SEBASTIÁN',
      '19698 SANTANDER DE QUILICHAO',
      '19701 SANTA ROSA',
      '19743 SILVIA',
      '19760 SOTARÁ PAISPAMBA',
      '19780 SUÁREZ',
      '19785 SUCRE',
      '19807 TIMBÍO',
      '19809 TIMBIQUÍ',
      '19821 TORIBÍO',
      '19824 TOTORÓ',
      '19845 VILLA RICA',
    ],
    '20 CESAR': [
      '20001 VALLEDUPAR',
      '20011 AGUACHICA',
      '20013 AGUSTÍN CODAZZI',
      '20032 ASTREA',
      '20045 BECERRIL',
      '20060 BOSCONIA',
      '20175 CHIMICHAGUA',
      '20178 CHIRIGUANÁ',
      '20228 CURUMANÍ',
      '20238 EL COPEY',
      '20250 EL PASO',
      '20295 GAMARRA',
      '20310 GONZÁLEZ',
      '20383 LA GLORIA',
      '20400 LA JAGUA DE IBIRICO',
      '20443 MANAURE BALCÓN DEL CESAR',
      '20517 PAILITAS',
      '20550 PELAYA',
      '20570 PUEBLO BELLO',
      '20614 RÍO DE ORO',
      '20621 LA PAZ',
      '20710 SAN ALBERTO',
      '20750 SAN DIEGO',
      '20770 SAN MARTÍN',
      '20787 TAMALAMEQUE',
    ],
    '23 CÓRDOBA': [
      '23001 MONTERÍA',
      '23068 AYAPEL',
      '23079 BUENAVISTA',
      '23090 CANALETE',
      '23162 CERETÉ',
      '23168 CHIMÁ',
      '23182 CHINÚ',
      '23189 CIÉNAGA DE ORO',
      '23300 COTORRA',
      '23350 LA APARTADA',
      '23417 LORICA',
      '23419 LOS CÓRDOBAS',
      '23464 MOMIL',
      '23466 MONTELÍBANO',
      '23500 MOÑITOS',
      '23555 PLANETA RICA',
      '23570 PUEBLO NUEVO',
      '23574 PUERTO ESCONDIDO',
      '23580 PUERTO LIBERTADOR',
      '23586 PURÍSIMA DE LA CONCEPCIÓN',
      '23660 SAHAGÚN',
      '23670 SAN ANDRÉS DE SOTAVENTO',
      '23672 SAN ANTERO',
      '23675 SAN BERNARDO DEL VIENTO',
      '23678 SAN CARLOS',
      '23682 SAN JOSÉ DE URÉ',
      '23686 SAN PELAYO',
      '23807 TIERRALTA',
      '23815 TUCHÍN',
      '23855 VALENCIA',
    ],
    '25 CUNDINAMARCA': [
      '25001 AGUA DE DIOS',
      '25019 ALBÁN',
      '25035 ANAPOIMA',
      '25040 ANOLAIMA',
      '25053 ARBELÁEZ',
      '25086 BELTRÁN',
      '25095 BITUIMA',
      '25099 BOJACÁ',
      '25120 CABRERA',
      '25123 CACHIPAY',
      '25126 CAJICÁ',
      '25148 CAPARRAPÍ',
      '25151 CÁQUEZA',
      '25154 CARMEN DE CARUPA',
      '25168 CHAGUANÍ',
      '25175 CHÍA',
      '25178 CHIPAQUE',
      '25181 CHOACHÍ',
      '25183 CHOCONTÁ',
      '25200 COGUA',
      '25214 COTA',
      '25224 CUCUNUBÁ',
      '25245 EL COLEGIO',
      '25258 EL PEÑÓN',
      '25260 EL ROSAL',
      '25269 FACATATIVÁ',
      '25279 FÓMEQUE',
      '25281 FOSCA',
      '25286 FUNZA',
      '25288 FÚQUENE',
      '25290 FUSAGASUGÁ',
      '25293 GACHALÁ',
      '25295 GACHANCIPÁ',
      '25297 GACHETÁ',
      '25299 GAMA',
      '25307 GIRARDOT',
      '25312 GRANADA',
      '25317 GUACHETÁ',
      '25320 GUADUAS',
      '25322 GUASCA',
      '25324 GUATAQUÍ',
      '25326 GUATAVITA',
      '25328 GUAYABAL DE SÍQUIMA',
      '25335 GUAYABETAL',
      '25339 GUTIÉRREZ',
      '25368 JERUSALÉN',
      '25372 JUNÍN',
      '25377 LA CALERA',
      '25386 LA MESA',
      '25394 LA PALMA',
      '25398 LA PEÑA',
      '25402 LA VEGA',
      '25407 LENGUAZAQUE',
      '25426 MACHETÁ',
      '25430 MADRID',
      '25436 MANTA',
      '25438 MEDINA',
      '25473 MOSQUERA',
      '25483 NARIÑO',
      '25486 NEMOCÓN',
      '25488 NILO',
      '25489 NIMAIMA',
      '25491 NOCAIMA',
      '25506 VENECIA',
      '25513 PACHO',
      '25518 PAIME',
      '25524 PANDI',
      '25530 PARATEBUENO',
      '25535 PASCA',
      '25572 PUERTO SALGAR',
      '25580 PULÍ',
      '25592 QUEBRADANEGRA',
      '25594 QUETAME',
      '25596 QUIPILE',
      '25599 APULO',
      '25612 RICAURTE',
      '25645 SAN ANTONIO DEL TEQUENDAMA',
      '25649 SAN BERNARDO',
      '25653 SAN CAYETANO',
      '25658 SAN FRANCISCO',
      '25662 SAN JUAN DE RIOSECO',
      '25718 SASAIMA',
      '25736 SESQUILÉ',
      '25740 SIBATÉ',
      '25743 SILVANIA',
      '25745 SIMIJACA',
      '25754 SOACHA',
      '25758 SOPÓ',
      '25769 SUBACHOQUE',
      '25772 SUESCA',
      '25777 SUPATÁ',
      '25779 SUSA',
      '25781 SUTATAUSA',
      '25785 TABIO',
      '25793 TAUSA',
      '25797 TENA',
      '25799 TENJO',
      '25805 TIBACUY',
      '25807 TIBIRITA',
      '25815 TOCAIMA',
      '25817 TOCANCIPÁ',
      '25823 TOPAIPÍ',
      '25839 UBALÁ',
      '25841 UBAQUE',
      '25843 VILLA DE SAN DIEGO DE UBATÉ',
      '25845 UNE',
      '25851 ÚTICA',
      '25862 VERGARA',
      '25867 VIANÍ',
      '25871 VILLAGÓMEZ',
      '25873 VILLAPINZÓN',
      '25875 VILLETA',
      '25878 VIOTÁ',
      '25885 YACOPÍ',
      '25898 ZIPACÓN',
      '25899 ZIPAQUIRÁ',
    ],
    '27 CHOCÓ': [
      '27001 QUIBDÓ',
      '27006 ACANDÍ',
      '27025 ALTO BAUDÓ',
      '27050 ATRATO',
      '27073 BAGADÓ',
      '27075 BAHÍA SOLANO',
      '27077 BAJO BAUDÓ',
      '27099 BOJAYÁ',
      '27135 EL CANTÓN DEL SAN PABLO',
      '27150 CARMEN DEL DARIÉN',
      '27160 CÉRTEGUI',
      '27205 CONDOTO',
      '27245 EL CARMEN DE ATRATO',
      '27250 EL LITORAL DEL SAN JUAN',
      '27361 ISTMINA',
      '27372 JURADÓ',
      '27413 LLORÓ',
      '27425 MEDIO ATRATO',
      '27430 MEDIO BAUDÓ',
      '27450 MEDIO SAN JUAN',
      '27491 NÓVITA',
      '27495 NUQUÍ',
      '27580 RÍO IRÓ',
      '27600 RÍO QUITO',
      '27615 RIOSUCIO',
      '27660 SAN JOSÉ DEL PALMAR',
      '27745 SIPÍ',
      '27787 TADÓ',
      '27800 UNGUÍA',
      '27810 UNIÓN PANAMERICANA',
    ],
    '41 HUILA': [
      '41001 NEIVA',
      '41006 ACEVEDO',
      '41013 AGRADO',
      '41016 AIPE',
      '41020 ALGECIRAS',
      '41026 ALTAMIRA',
      '41078 BARAYA',
      '41132 CAMPOALEGRE',
      '41206 COLOMBIA',
      '41244 ELÍAS',
      '41298 GARZÓN',
      '41306 GIGANTE',
      '41319 GUADALUPE',
      '41349 HOBO',
      '41357 ÍQUIRA',
      '41359 ISNOS',
      '41378 LA ARGENTINA',
      '41396 LA PLATA',
      '41483 NÁTAGA',
      '41503 OPORAPA',
      '41518 PAICOL',
      '41524 PALERMO',
      '41530 PALESTINA',
      '41548 PITAL',
      '41551 PITALITO',
      '41615 RIVERA',
      '41660 SALADOBLANCO',
      '41668 SAN AGUSTÍN',
      '41676 SANTA MARÍA',
      '41770 SUAZA',
      '41791 TARQUI',
      '41797 TESALIA',
      '41799 TELLO',
      '41801 TERUEL',
      '41807 TIMANÁ',
      '41872 VILLAVIEJA',
      '41885 YAGUARÁ',
    ],
    '44 LA GUAJIRA': [
      '44001 RIOHACHA',
      '44035 ALBANIA',
      '44078 BARRANCAS',
      '44090 DIBULLA',
      '44098 DISTRACCIÓN',
      '44110 EL MOLINO',
      '44279 FONSECA',
      '44378 HATONUEVO',
      '44420 LA JAGUA DEL PILAR',
      '44430 MAICAO',
      '44560 MANAURE',
      '44650 SAN JUAN DEL CESAR',
      '44847 URIBIA',
      '44855 URUMITA',
      '44874 VILLANUEVA',
    ],
    '47 MAGDALENA': [
      '47001 SANTA MARTA',
      '47030 ALGARROBO',
      '47053 ARACATACA',
      '47058 ARIGUANÍ',
      '47161 CERRO DE SAN ANTONIO',
      '47170 CHIVOLO',
      '47189 CIÉNAGA',
      '47205 CONCORDIA',
      '47245 EL BANCO',
      '47258 EL PIÑÓN',
      '47268 EL RETÉN',
      '47288 FUNDACIÓN',
      '47318 GUAMAL',
      '47460 NUEVA GRANADA',
      '47541 PEDRAZA',
      '47545 PIJIÑO DEL CARMEN',
      '47551 PIVIJAY',
      '47555 PLATO',
      '47570 PUEBLOVIEJO',
      '47605 REMOLINO',
      '47660 SABANAS DE SAN ÁNGEL',
      '47675 SALAMINA',
      '47692 SAN SEBASTIÁN DE BUENAVISTA',
      '47703 SAN ZENÓN',
      '47707 SANTA ANA',
      '47720 SANTA BÁRBARA DE PINTO',
      '47745 SITIONUEVO',
      '47798 TENERIFE',
      '47960 ZAPAYÁN',
      '47980 ZONA BANANERA',
    ],
    '50 META': [
      '50001 VILLAVICENCIO',
      '50006 ACACÍAS',
      '50110 BARRANCA DE UPÍA',
      '50124 CABUYARO',
      '50150 CASTILLA LA NUEVA',
      '50223 CUBARRAL',
      '50226 CUMARAL',
      '50245 EL CALVARIO',
      '50251 EL CASTILLO',
      '50270 EL DORADO',
      '50287 FUENTE DE ORO',
      '50313 GRANADA',
      '50318 GUAMAL',
      '50325 MAPIRIPÁN',
      '50330 MESETAS',
      '50350 LA MACARENA',
      '50370 URIBE',
      '50400 LEJANÍAS',
      '50450 PUERTO CONCORDIA',
      '50568 PUERTO GAITÁN',
      '50573 PUERTO LÓPEZ',
      '50577 PUERTO LLERAS',
      '50590 PUERTO RICO',
      '50606 RESTREPO',
      '50680 SAN CARLOS DE GUAROA',
      '50683 SAN JUAN DE ARAMA',
      '50686 SAN JUANITO',
      '50689 SAN MARTÍN',
      '50711 VISTAHERMOSA',
    ],
    '52 NARIÑO': [
      '52001 PASTO',
      '52019 ALBÁN',
      '52022 ALDANA',
      '52036 ANCUYA',
      '52051 ARBOLEDA',
      '52079 BARBACOAS',
      '52083 BELÉN',
      '52110 BUESACO',
      '52203 COLÓN',
      '52207 CONSACÁ',
      '52210 CONTADERO',
      '52215 CÓRDOBA',
      '52224 CUASPUD CARLOSAMA',
      '52227 CUMBAL',
      '52233 CUMBITARA',
      '52240 CHACHAGÜÍ',
      '52250 EL CHARCO',
      '52254 EL PEÑOL',
      '52256 EL ROSARIO',
      '52258 EL TABLÓN DE GÓMEZ',
      '52260 EL TAMBO',
      '52287 FUNES',
      '52317 GUACHUCAL',
      '52320 GUAITARILLA',
      '52323 GUALMATÁN',
      '52352 ILES',
      '52354 IMUÉS',
      '52356 IPIALES',
      '52378 LA CRUZ',
      '52381 LA FLORIDA',
      '52385 LA LLANADA',
      '52390 LA TOLA',
      '52399 LA UNIÓN',
      '52405 LEIVA',
      '52411 LINARES',
      '52418 LOS ANDES',
      '52427 MAGÜÍ',
      '52435 MALLAMA',
      '52473 MOSQUERA',
      '52480 NARIÑO',
      '52490 OLAYA HERRERA',
      '52506 OSPINA',
      '52520 FRANCISCO PIZARRO',
      '52540 POLICARPA',
      '52560 POTOSÍ',
      '52565 PROVIDENCIA',
      '52573 PUERRES',
      '52585 PUPIALES',
      '52612 RICAURTE',
      '52621 ROBERTO PAYÁN',
      '52678 SAMANIEGO',
      '52683 SANDONÁ',
      '52685 SAN BERNARDO',
      '52687 SAN LORENZO',
      '52693 SAN PABLO',
      '52694 SAN PEDRO DE CARTAGO',
      '52696 SANTA BÁRBARA',
      '52699 SANTACRUZ',
      '52720 SAPUYES',
      '52786 TAMINANGO',
      '52788 TANGUA',
      '52835 SAN ANDRÉS DE TUMACO',
      '52838 TÚQUERRES',
      '52885 YACUANQUER',
    ],
    '54 NORTE DE SANTANDER': [
      '54001 SAN JOSÉ DE CÚCUTA',
      '54003 ÁBREGO',
      '54051 ARBOLEDAS',
      '54099 BOCHALEMA',
      '54109 BUCARASICA',
      '54125 CÁCOTA',
      '54128 CÁCHIRA',
      '54172 CHINÁCOTA',
      '54174 CHITAGÁ',
      '54206 CONVENCIÓN',
      '54223 CUCUTILLA',
      '54239 DURANIA',
      '54245 EL CARMEN',
      '54250 EL TARRA',
      '54261 EL ZULIA',
      '54313 GRAMALOTE',
      '54344 HACARÍ',
      '54347 HERRÁN',
      '54377 LABATECA',
      '54385 LA ESPERANZA',
      '54398 LA PLAYA',
      '54405 LOS PATIOS',
      '54418 LOURDES',
      '54480 MUTISCUA',
      '54498 OCAÑA',
      '54518 PAMPLONA',
      '54520 PAMPLONITA',
      '54553 PUERTO SANTANDER',
      '54599 RAGONVALIA',
      '54660 SALAZAR',
      '54670 SAN CALIXTO',
      '54673 SAN CAYETANO',
      '54680 SANTIAGO',
      '54720 SARDINATA',
      '54743 SILOS',
      '54800 TEORAMA',
      '54810 TIBÚ',
      '54820 TOLEDO',
      '54871 VILLA CARO',
      '54874 VILLA DEL ROSARIO',
    ],
    '63 QUINDÍO': [
      '63001 ARMENIA',
      '63111 BUENAVISTA',
      '63130 CALARCÁ',
      '63190 CIRCASIA',
      '63212 CÓRDOBA',
      '63272 FILANDIA',
      '63302 GÉNOVA',
      '63401 LA TEBAIDA',
      '63470 MONTENEGRO',
      '63548 PIJAO',
      '63594 QUIMBAYA',
      '63690 SALENTO',
    ],
    '66 RISARALDA': [
      '66001 PEREIRA',
      '66045 APÍA',
      '66075 BALBOA',
      '66088 BELÉN DE UMBRÍA',
      '66170 DOSQUEBRADAS',
      '66318 GUÁTICA',
      '66383 LA CELIA',
      '66400 LA VIRGINIA',
      '66440 MARSELLA',
      '66456 MISTRATÓ',
      '66572 PUEBLO RICO',
      '66594 QUINCHÍA',
      '66682 SANTA ROSA DE CABAL',
      '66687 SANTUARIO',
    ],
    '68 SANTANDER': [
      '68001 BUCARAMANGA',
      '68013 AGUADA',
      '68020 ALBANIA',
      '68051 ARATOCA',
      '68077 BARBOSA',
      '68079 BARICHARA',
      '68081 BARRANCABERMEJA',
      '68092 BETULIA',
      '68101 BOLÍVAR',
      '68121 CABRERA',
      '68132 CALIFORNIA',
      '68147 CAPITANEJO',
      '68152 CARCASÍ',
      '68160 CEPITÁ',
      '68162 CERRITO',
      '68167 CHARALÁ',
      '68169 CHARTA',
      '68176 CHIMA',
      '68179 CHIPATÁ',
      '68190 CIMITARRA',
      '68207 CONCEPCIÓN',
      '68209 CONFINES',
      '68211 CONTRATACIÓN',
      '68217 COROMORO',
      '68229 CURITÍ',
      '68235 EL CARMEN DE CHUCURÍ',
      '68245 EL GUACAMAYO',
      '68250 EL PEÑÓN',
      '68255 EL PLAYÓN',
      '68264 ENCINO',
      '68266 ENCISO',
      '68271 FLORIÁN',
      '68276 FLORIDABLANCA',
      '68296 GALÁN',
      '68298 GÁMBITA',
      '68307 GIRÓN',
      '68318 GUACA',
      '68320 GUADALUPE',
      '68322 GUAPOTÁ',
      '68324 GUAVATÁ',
      '68327 GÜEPSA',
      '68344 HATO',
      '68368 JESÚS MARÍA',
      '68370 JORDÁN',
      '68377 LA BELLEZA',
      '68385 LANDÁZURI',
      '68397 LA PAZ',
      '68406 LEBRIJA',
      '68418 LOS SANTOS',
      '68425 MACARAVITA',
      '68432 MÁLAGA',
      '68444 MATANZA',
      '68464 MOGOTES',
      '68468 MOLAGAVITA',
      '68498 OCAMONTE',
      '68500 OIBA',
      '68502 ONZAGA',
      '68522 PALMAR',
      '68524 PALMAS DEL SOCORRO',
      '68533 PÁRAMO',
      '68547 PIEDECUESTA',
      '68549 PINCHOTE',
      '68572 PUENTE NACIONAL',
      '68573 PUERTO PARRA',
      '68575 PUERTO WILCHES',
      '68615 RIONEGRO',
      '68655 SABANA DE TORRES',
      '68669 SAN ANDRÉS',
      '68673 SAN BENITO',
      '68679 SAN GIL',
      '68682 SAN JOAQUÍN',
      '68684 SAN JOSÉ DE MIRANDA',
      '68686 SAN MIGUEL',
      '68689 SAN VICENTE DE CHUCURÍ',
      '68705 SANTA BÁRBARA',
      '68720 SANTA HELENA DEL OPÓN',
      '68745 SIMACOTA',
      '68755 SOCORRO',
      '68770 SUAITA',
      '68773 SUCRE',
      '68780 SURATÁ',
      '68820 TONA',
      '68855 VALLE DE SAN JOSÉ',
      '68861 VÉLEZ',
      '68867 VETAS',
      '68872 VILLANUEVA',
      '68895 ZAPATOCA',
    ],
    '70 SUCRE': [
      '70001 SINCELEJO',
      '70110 BUENAVISTA',
      '70124 CAIMITO',
      '70204 COLOSÓ',
      '70215 COROZAL',
      '70221 COVEÑAS',
      '70230 CHALÁN',
      '70233 EL ROBLE',
      '70235 GALERAS',
      '70265 GUARANDA',
      '70400 LA UNIÓN',
      '70418 LOS PALMITOS',
      '70429 MAJAGUAL',
      '70473 MORROA',
      '70508 OVEJAS',
      '70523 PALMITO',
      '70670 SAMPUÉS',
      '70678 SAN BENITO ABAD',
      '70702 SAN JUAN DE BETULIA',
      '70708 SAN MARCOS',
      '70713 SAN ONOFRE',
      '70717 SAN PEDRO',
      '70742 SAN LUIS DE SINCÉ',
      '70771 SUCRE',
      '70820 SANTIAGO DE TOLÚ',
      '70823 SAN JOSÉ DE TOLUVIEJO',
    ],
    '73 TOLIMA': [
      '73001 IBAGUÉ',
      '73024 ALPUJARRA',
      '73026 ALVARADO',
      '73030 AMBALEMA',
      '73043 ANZOÁTEGUI',
      '73055 ARMERO',
      '73067 ATACO',
      '73124 CAJAMARCA',
      '73148 CARMEN DE APICALÁ',
      '73152 CASABIANCA',
      '73168 CHAPARRAL',
      '73200 COELLO',
      '73217 COYAIMA',
      '73226 CUNDAY',
      '73236 DOLORES',
      '73268 ESPINAL',
      '73270 FALAN',
      '73275 FLANDES',
      '73283 FRESNO',
      '73319 GUAMO',
      '73347 HERVEO',
      '73349 HONDA',
      '73352 ICONONZO',
      '73408 LÉRIDA',
      '73411 LÍBANO',
      '73443 SAN SEBASTIÁN DE MARIQUITA',
      '73449 MELGAR',
      '73461 MURILLO',
      '73483 NATAGAIMA',
      '73504 ORTEGA',
      '73520 PALOCABILDO',
      '73547 PIEDRAS',
      '73555 PLANADAS',
      '73563 PRADO',
      '73585 PURIFICACIÓN',
      '73616 RIOBLANCO',
      '73622 RONCESVALLES',
      '73624 ROVIRA',
      '73671 SALDAÑA',
      '73675 SAN ANTONIO',
      '73678 SAN LUIS',
      '73686 SANTA ISABEL',
      '73770 SUÁREZ',
      '73854 VALLE DE SAN JUAN',
      '73861 VENADILLO',
      '73870 VILLAHERMOSA',
      '73873 VILLARRICA',
    ],
    '76 VALLE DEL CAUCA': [
      '76001 SANTIAGO DE CALI',
      '76020 ALCALÁ',
      '76036 ANDALUCÍA',
      '76041 ANSERMANUEVO',
      '76054 ARGELIA',
      '76100 BOLÍVAR',
      '76109 BUENAVENTURA',
      '76111 GUADALAJARA DE BUGA',
      '76113 BUGALAGRANDE',
      '76122 CAICEDONIA',
      '76126 CALIMA',
      '76130 CANDELARIA',
      '76147 CARTAGO',
      '76233 DAGUA',
      '76243 EL ÁGUILA',
      '76246 EL CAIRO',
      '76248 EL CERRITO',
      '76250 EL DOVIO',
      '76275 FLORIDA',
      '76306 GINEBRA',
      '76318 GUACARÍ',
      '76364 JAMUNDÍ',
      '76377 LA CUMBRE',
      '76400 LA UNIÓN',
      '76403 LA VICTORIA',
      '76497 OBANDO',
      '76520 PALMIRA',
      '76563 PRADERA',
      '76606 RESTREPO',
      '76616 RIOFRÍO',
      '76622 ROLDANILLO',
      '76670 SAN PEDRO',
      '76736 SEVILLA',
      '76823 TORO',
      '76828 TRUJILLO',
      '76834 TULUÁ',
      '76845 ULLOA',
      '76863 VERSALLES',
      '76869 VIJES',
      '76890 YOTOCO',
      '76892 YUMBO',
      '76895 ZARZAL',
    ],
    '81 ARAUCA': [
      '81001 ARAUCA',
      '81065 ARAUQUITA',
      '81220 CRAVO NORTE',
      '81300 FORTUL',
      '81591 PUERTO RONDÓN',
      '81736 SARAVENA',
      '81794 TAME',
    ],
    '85 CASANARE': [
      '85001 YOPAL',
      '85010 AGUAZUL',
      '85015 CHÁMEZA',
      '85125 HATO COROZAL',
      '85136 LA SALINA',
      '85139 MANÍ',
      '85162 MONTERREY',
      '85225 NUNCHÍA',
      '85230 OROCUÉ',
      '85250 PAZ DE ARIPORO',
      '85263 PORE',
      '85279 RECETOR',
      '85300 SABANALARGA',
      '85315 SÁCAMA',
      '85325 SAN LUIS DE PALENQUE',
      '85400 TÁMARA',
      '85410 TAURAMENA',
      '85430 TRINIDAD',
      '85440 VILLANUEVA',
    ],
    '86 PUTUMAYO': [
      '86001 MOCOA',
      '86219 COLÓN',
      '86320 ORITO',
      '86568 PUERTO ASÍS',
      '86569 PUERTO CAICEDO',
      '86571 PUERTO GUZMÁN',
      '86573 PUERTO LEGUÍZAMO',
      '86749 SIBUNDOY',
      '86755 SAN FRANCISCO',
      '86757 SAN MIGUEL',
      '86760 SANTIAGO',
      '86865 VALLE DEL GUAMUEZ',
      '86885 VILLAGARZÓN',
    ],
    '88 ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA': [
      '88001 SAN ANDRÉS',
      '88564 PROVIDENCIA',
    ],
    '91 AMAZONAS': [
      '91001 LETICIA',
      '91263 EL ENCANTO',
      '91405 LA CHORRERA',
      '91407 LA PEDRERA',
      '91430 LA VICTORIA',
      '91460 MIRITÍ - PARANÁ',
      '91530 PUERTO ALEGRÍA',
      '91536 PUERTO ARICA',
      '91540 PUERTO NARIÑO',
      '91669 PUERTO SANTANDER',
      '91798 TARAPACÁ',
    ],
    '94 GUAINÍA': [
      '94001 INÍRIDA',
      '94343 BARRANCOMINAS',
      '94883 SAN FELIPE',
      '94884 PUERTO COLOMBIA',
      '94885 LA GUADALUPE',
      '94886 CACAHUAL',
      '94887 PANA PANA',
      '94888 MORICHAL',
    ],
    '95 GUAVIARE': [
      '95001 SAN JOSÉ DEL GUAVIARE',
      '95015 CALAMAR',
      '95025 EL RETORNO',
      '95200 MIRAFLORES',
    ],
    '97 VAUPÉS': [
      '97001 MITÚ',
      '97161 CARURÚ',
      '97511 PACOA',
      '97666 TARAIRA',
      '97777 PAPUNAHUA',
      '97889 YAVARATÉ',
    ],
    '99 VICHADA': [
      '99001 PUERTO CARREÑO',
      '99524 LA PRIMAVERA',
      '99624 SANTA ROSALÍA',
      '99773 CUMARIBO',
    ],
  };

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null!;
      }
      const valid = regex.test(control.value);
      return valid ? null! : error;
    };
  }

  formConsul = this.fb.group({
    id_oferta: [
      this.consultaService.consultaOfer.id_oferta,
      [
        Validators.maxLength(30),
        ConOferComponent.patternValidator(/^\d+$/, {
          hasNumber: true,
        }),
      ],
    ],
    numprenue: [
      this.consultaService.consultaOfer.npn,
      [
        Validators.minLength(20),
        Validators.maxLength(30),
        ConOferComponent.patternValidator(/^\d+$/, {
          hasNumber: true,
        }),
      ],
    ],
    numpreant: [
      this.consultaService.consultaOfer.npa,
      [
        Validators.minLength(10),
        Validators.maxLength(20),
        ConOferComponent.patternValidator(/^\d+$/, {
          hasNumber: true,
        }),
      ],
    ],
    matrinmb: [
      this.consultaService.consultaOfer.matricula,
      [Validators.maxLength(20)],
    ],
    dep: [this.consultaService.consultaOfer.departamento],
    mun: [this.consultaService.consultaOfer.municipio],
    feccapofer: [this.consultaService.consultaOfer.fecha],
    dirrur: [
      this.consultaService.consultaOferDir.dirrur,
      [Validators.maxLength(100)],
    ],
    dir01: [this.consultaService.consultaOferDir.dir01],
    dir02: [
      this.consultaService.consultaOferDir.dir02,
      [Validators.max(1000), Validators.min(0)],
    ],
    dir03: [this.consultaService.consultaOferDir.dir03],
    dir04: [this.consultaService.consultaOferDir.dir04],
    dir05: [this.consultaService.consultaOferDir.dir05],
    dir06: [
      this.consultaService.consultaOferDir.dir06,
      [Validators.max(1000), Validators.min(0)],
    ],
    dir07: [this.consultaService.consultaOferDir.dir07],
    dir08: [this.consultaService.consultaOferDir.dir08],
  });

  deptos = Object.keys(this.deptosMpios);

  mpios =
    this.deptosMpios[
      this.formConsul.value.dep?.valueOf() as keyof typeof this.deptosMpios
    ];

  handleChange(dto: any) {
    this.formConsul.value.mun = String(
      this.consultaService.consultaOfer.municipio?.valueOf
    );
    this.mpios = this.deptosMpios[dto as keyof typeof this.deptosMpios];
    this.formConsul.clearValidators();
  }

  objconsulOfer: consulOferI = {
    id_oferta: undefined,
    fecha: undefined,
    npn: undefined,
    npa: undefined,
    matricula: undefined,
    departamento: undefined,
    municipio: undefined,
    direccion: undefined,

    email: this.valrelacionesService.infoPer.email,
    rol: this.valrelacionesService.infoPer.rol,
  };

  objconsulOferDir: consulLocPreIDir = {
    id_oferta: undefined,
    dir01: undefined,
    dir02: undefined,
    dir03: undefined,
    dir04: undefined,
    dir05: undefined,
    dir06: undefined,
    dir07: undefined,
    dir08: undefined,
    dirParte1: undefined,
    dirParte2: undefined,
    dirParte3: undefined,
    dirCompleta: undefined,
    dirrur: undefined,
  };

  resConsulOferObj: resconsulOferI = {
    status: undefined,
    msj: '',
    dat_consul: {
      cant_reg: 0,
      registros: [
        {
          id_oferta: undefined,
          matricula: undefined,
          estado_oferta: undefined,
        },
      ],
    },
    token: String(localStorage.getItem('token')),
  };

  cant_pag: number[] = [];
  cant_reg_pag: number = 2;
  pag_actual: number = 0;

  consultar(): any {
    this.resConsulOferObj.token = String(localStorage.getItem('token'));
    this.objconsulOfer.id_oferta =
      Number.isNaN(Number(this.formConsul.value.id_oferta?.valueOf())) ||
      Number(this.formConsul.value.id_oferta?.valueOf()) == 0
        ? undefined
        : Number(this.formConsul.value.id_oferta?.valueOf());
    this.objconsulOfer.fecha =
      this.formConsul.value.feccapofer?.valueOf() == ''
        ? undefined
        : this.formConsul.value.feccapofer?.valueOf();
    this.objconsulOfer.npn =
      this.formConsul.value.numprenue?.valueOf() == ''
        ? undefined
        : this.formConsul.value.numprenue?.valueOf();
    this.objconsulOfer.npa =
      this.formConsul.value.numpreant?.valueOf() == ''
        ? undefined
        : this.formConsul.value.numpreant?.valueOf();
    this.objconsulOfer.matricula = this.formConsul.value.matrinmb?.valueOf();
    this.objconsulOfer.departamento =
      this.formConsul.value.dep?.valueOf() == 'undefined' ||
      this.formConsul.value.dep?.valueOf() == ''
        ? undefined
        : this.formConsul.value.dep?.valueOf();
    this.objconsulOfer.municipio =
      this.formConsul.value.mun?.valueOf() == 'undefined' ||
      this.formConsul.value.mun?.valueOf() == ''
        ? undefined
        : this.formConsul.value.mun?.valueOf();

    this.objconsulOferDir.dir01 = this.formConsul.value.dir01?.valueOf();
    this.objconsulOferDir.dir02 = this.formConsul.value.dir02?.valueOf();
    this.objconsulOferDir.dir03 = this.formConsul.value.dir03?.valueOf();
    this.objconsulOferDir.dir04 = this.formConsul.value.dir04?.valueOf();
    this.objconsulOferDir.dir05 = this.formConsul.value.dir05?.valueOf();
    this.objconsulOferDir.dir06 = this.formConsul.value.dir06?.valueOf();
    this.objconsulOferDir.dir07 = this.formConsul.value.dir07?.valueOf();
    this.objconsulOferDir.dir08 = this.formConsul.value.dir08?.valueOf();

    this.objconsulOferDir.dirParte1 = `${
      !!this.formConsul.value.dir01 ? this.formConsul.value.dir01 : ``
    } ${!!this.formConsul.value.dir02 ? this.formConsul.value.dir02 : ``} ${
      !!this.formConsul.value.dir03 ? this.formConsul.value.dir03 : ``
    }`;
    this.objconsulOferDir.dirParte2 = !!this.formConsul.value.dir04
      ? `Bis`
      : ` `;

    this.objconsulOferDir.dirParte3 = `${
      !!this.formConsul.value.dir05 ? this.formConsul.value.dir05 : ``
    } ${!!this.formConsul.value.dir06 ? this.formConsul.value.dir06 : ``} ${
      !!this.formConsul.value.dir07 ? this.formConsul.value.dir07 : ``
    } ${!!this.formConsul.value.dir08 ? this.formConsul.value.dir08 : ``}`;
    this.objconsulOferDir.dirCompleta =
      `${this.objconsulOferDir.dirParte1} ${this.objconsulOferDir.dirParte2} ${this.objconsulOferDir.dirParte3}`
        .replace(/\s+/gi, ' ')
        .trim();

    this.objconsulOferDir.dirrur = this.formConsul.value.dirrur?.valueOf();

    if (
      this.objconsulOferDir.dirCompleta === undefined ||
      this.objconsulOferDir.dirCompleta === null ||
      this.objconsulOferDir.dirCompleta === ''
    ) {
      this.objconsulOfer.direccion = this.objconsulOferDir.dirrur?.valueOf();
    } else {
      this.objconsulOfer.direccion =
        this.objconsulOferDir.dirCompleta?.valueOf();
    }

    this.consultaService.setConsulOfer = this.objconsulOfer;
    this.consultaService.setConsulOferDir = this.objconsulOferDir;

    let mensaje = this.consultaService.controlVacios();

    if (mensaje === ``) {
      this.api
        .consultarOferta(
          this.consultaService.setConsulOfer,
          this.resConsulOferObj.token
        )
        .subscribe((resConsulOfer) => {
          const dialogRef = this.dialog.open(DialogsComponent, {
            width: '350px',
            data: `${resConsulOfer.msj}, se consultaron ${this.cant_reg_pag} de ${resConsulOfer.dat_consul.cant_reg} registros.`,
          });
          dialogRef.afterClosed().subscribe((res) => {
            if (res) {
              console.warn(resConsulOfer.msj);
            }
          });
          if (resConsulOfer.status === '200 OK') {
            localStorage.setItem('token', resConsulOfer.token?.valueOf());
            this.resConsulOferObj = resConsulOfer;
            this.cant_pag = Array.from(
              Array(
                this.resConsulOferObj.dat_consul.cant_reg % this.cant_reg_pag ==
                  0
                  ? Math.trunc(
                      this.resConsulOferObj.dat_consul.cant_reg /
                        this.cant_reg_pag
                    )
                  : Math.trunc(
                      this.resConsulOferObj.dat_consul.cant_reg /
                        this.cant_reg_pag
                    ) + 1
              ).keys()
            );
            this.cant_pag = this.cant_pag.map(function (value) {
              return (value = value + 1);
            });
            this.pag_actual = 1;
            console.log(this.resConsulOferObj.dat_consul.registros);
          } else {
            const dialogRef = this.dialog.open(DialogsComponent, {
              width: '350px',
              data: resConsulOfer.msj,
            });
            dialogRef.afterClosed().subscribe((res) => {
              if (res) {
                console.warn(resConsulOfer.msj);
              }
            });
          }
        });
    } else {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: mensaje,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(mensaje);
        }
      });
    }
  }

  limpiarConsulta(): any {
    this.consultaService.limpiarVariablesConsulta();
    this.formConsul.controls['id_oferta'].setValue(undefined);
    this.formConsul.controls['feccapofer'].setValue(undefined);
    this.formConsul.controls['numprenue'].setValue(undefined);
    this.formConsul.controls['numpreant'].setValue(undefined);
    this.formConsul.controls['matrinmb'].setValue(undefined);
    this.formConsul.controls['dep'].setValue(undefined);
    this.formConsul.controls['mun'].setValue(undefined);

    this.formConsul.controls['dir01'].setValue(undefined);
    this.formConsul.controls['dir02'].setValue(undefined);
    this.formConsul.controls['dir03'].setValue(undefined);
    this.formConsul.controls['dir04'].setValue(undefined);
    this.formConsul.controls['dir05'].setValue(undefined);
    this.formConsul.controls['dir06'].setValue(undefined);
    this.formConsul.controls['dir07'].setValue(undefined);
    this.formConsul.controls['dir08'].setValue(undefined);

    this.formConsul.controls['dirrur'].setValue(undefined);

    const dialogRef = this.dialog.open(DialogsComponent, {
      width: '350px',
      data: 'Datos limpiados',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        console.warn('Datos limpiados');
      }
    });
  }

  editarOferta(id_oferta: string): any {
    this.resConsulOferObj.token = String(localStorage.getItem('token'));
    this.api
      .editarOferta(Number(id_oferta), this.resConsulOferObj.token)
      .subscribe((reseditOfer: ResEditOferI) => {
        if (reseditOfer.status === '200 OK') {
          localStorage.setItem('token', reseditOfer.token?.valueOf());
          this.editar.setIdenPredio = reseditOfer.datos[0];
          this.editar.setLocaPredio = reseditOfer.datos[1];
          this.editar.setDatGenPredio = reseditOfer.datos[2];
          this.editar.setInfoFisPredio = reseditOfer.datos[3];
          this.editar.setInfoEconoPredio = reseditOfer.datos[4];
          this.editar.setInfoFuentePredio = reseditOfer.datos[5];
          this.editar.setInfoAdminePredio = reseditOfer.datos[6];

          console.log(this.editar.idenPredio);
        } else {
          const dialogRef = this.dialog.open(DialogsComponent, {
            width: '350px',
            data: reseditOfer.msj,
          });
          dialogRef.afterClosed().subscribe((res) => {
            if (res) {
              console.warn(reseditOfer.msj);
            }
          });
        }
      });
    console.log(id_oferta);
  }

  eliminarOferta(id_oferta: string): any {
    console.log(id_oferta);
  }

  duplicarOferta(id_oferta: string): any {
    console.log(id_oferta);
  }

  verificarOferta(id_oferta: string): any {
    console.log(id_oferta);
  }

  consultarPagina(pag: number): any {
    this.api
      .consultarOfertaPag(
        this.consultaService.setConsulOfer,
        this.resConsulOferObj.token,
        pag
      )
      .subscribe((resConsulOfer) => {
        if (resConsulOfer.status === '200 OK') {
          localStorage.setItem('token', resConsulOfer.token?.valueOf());
          this.resConsulOferObj = resConsulOfer;
          this.pag_actual = pag;

          console.log(this.resConsulOferObj.dat_consul.registros);
        } else {
          const dialogRef = this.dialog.open(DialogsComponent, {
            width: '350px',
            data: resConsulOfer.msj,
          });
          dialogRef.afterClosed().subscribe((res) => {
            if (res) {
              console.warn(resConsulOfer.msj);
            }
          });
        }
      });
    console.log(pag);
  }

  consultarPaginaAnt(): any {
    if (this.pag_actual <= 1) {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `No hay páginas. Continuar a la siguiente.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(`No hay páginas. Continuar a la siguiente.`);
        }
      });
    } else {
      this.consultarPagina(this.pag_actual - 1);
      this.pag_actual =
        this.pag_actual <= 1 ? this.pag_actual : this.pag_actual - 1;
    }
  }

  consultarPaginaPos(): any {
    console.log(this.cant_pag.length);

    if (this.pag_actual == this.cant_pag.length) {
      const dialogRef = this.dialog.open(DialogsComponent, {
        width: '350px',
        data: `No hay páginas. Continuar a la anterior.`,
      });
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          console.warn(`No hay páginas. Continuar a la anterior.`);
        }
      });
    } else {
      this.consultarPagina(this.pag_actual + 1);
      this.pag_actual =
        this.pag_actual == this.cant_pag.length
          ? this.pag_actual
          : this.pag_actual + 1;
    }
  }
}
