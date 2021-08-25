import { Hibrido } from "src/app/hibrido";
import { Insumo } from "src/app/insumo";
import { Maquina } from "src/app/maquina";
import { Pessoa } from "src/app/pessoa";


export class AptAtividadeDTO {
    constructor(
        public id: string,
        public idApontamentoCabecalho: AptAtividadeDTO,
        public maquina: Maquina,
        public insumo: Insumo,
        public quantidadeInsumo: number,
        public hibrido: Hibrido,
        public quantidadeHibrido: number,
        public funcionario: Pessoa
    ) { }
}