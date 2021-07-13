import { Pessoa } from "src/app/pessoa";

export class Usuario {
    constructor(
        public id: string,
        public pessoa: Pessoa,
        public perfil: string,
        public senha: string
    ) {}
}