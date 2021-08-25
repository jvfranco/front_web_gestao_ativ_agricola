import { Propriedade } from "src/app/propriedade";
import { Safra } from "src/app/safra";
import { Talhao } from "src/app/talhao";
import { Coordenadas } from "./coordenadas";

export class Ocorrencia {
    constructor(
        public id: string,
        public titulo: string,
        public descricao: string,
        public safra: Safra,
        public propriedade: Propriedade,
        public talhao: Talhao,
        public coordenadas: string,
        public dataOcorrencia: Date
    ) {}
}