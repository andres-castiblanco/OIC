export interface consulOferI {
  id_oferta: Number | null | undefined;
  fecha: Date | String | Number | null | undefined;
  npn: String | null | undefined;
  npa: String | null | undefined;
  matricula: String | null | undefined;
  departamento: String | null | undefined;
  municipio: String | null | undefined;
  direccion: String | null | undefined;

  email: String | null | undefined;
  rol: Number | null | undefined;
}

export interface consulLocPreIDir {
  id_oferta: Number | null | undefined;
  dir01: String | null | undefined;
  dir02: String | null | undefined;
  dir03: String | null | undefined;
  dir04: String | null | undefined;
  dir05: String | null | undefined;
  dir06: String | null | undefined;
  dir07: String | null | undefined;
  dir08: String | null | undefined;
  dirParte1: String | null | undefined;
  dirParte2: String | null | undefined;
  dirParte3: String | null | undefined;
  dirCompleta: String | null | undefined;
  dirrur: String | null | undefined;
}
