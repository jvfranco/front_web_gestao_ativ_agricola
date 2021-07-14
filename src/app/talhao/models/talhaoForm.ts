import { TipoSolo } from "./tipoSolo";

export class TalhaoForm {
    constructor(
        public id: string,
        public identificacao: string,
        public area: number,
        public coordenadas: string,
        public idUnidadeDeMedida: string,
        public idPropriedade: string,
        public tipoSolo: TipoSolo
    ) {}
}