export class Paginacao {
    constructor(
        public page?: number,
        public size?: number,
        public sort?: string,
        public direction?: string,
        public totalElements?: number
    ) {}
}
