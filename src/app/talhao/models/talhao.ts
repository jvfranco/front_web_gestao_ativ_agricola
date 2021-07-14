import { Propriedade } from "src/app/propriedade";
import { UnidadeDeMedida } from "src/app/unidade-de-medida";
import { TipoSolo } from "./tipoSolo";

export class Talhao {
    constructor(
        public id: string,
        public identificacao: string,
        public area: number,
        public coordenadas: string,
        public unidadeDeMedida: UnidadeDeMedida,
        public propriedade: Propriedade,
        public tipoSolo: TipoSolo
    ) {}
}