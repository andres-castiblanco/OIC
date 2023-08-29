import { datGenI } from './crear-oferta-datgen.interface';
import { idenPreI } from './crear-oferta-iden-pre.interface';
import { infoAdminI } from './crear-oferta-inf-admin.interface';
import { infoEconoI } from './crear-oferta-inf-eco.interface';
import { infoFisiI } from './crear-oferta-inf-fis.interface';
import { infoFuenteI } from './crear-oferta-inf-fuente.interface';
import { locPreI } from './crear-oferta-loc-pre.interface';

export interface ResEditOferI {
  id_oferta: Number | null;
  status: string | null;
  msj: string;
  token: string;
  datos: [
    idenPre: idenPreI,
    locPre: locPreI,
    datGen: datGenI,
    infoFis: infoFisiI,
    infoEco: infoEconoI,
    infoFuen: infoFuenteI,
    infoAdmin: infoAdminI
  ];
}
