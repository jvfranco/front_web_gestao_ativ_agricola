export class Usuario {
    constructor(
        public id: string,
        public nome: string,
        public cpf: string,
        public email: string,
        public telefone: string,
        public perfil: string,
        public senha: string
    ) {}
}