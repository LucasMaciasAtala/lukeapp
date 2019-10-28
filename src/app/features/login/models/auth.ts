export interface IAuth {
    id: string;
    email: string;
    name: string;
    secondname: string;
    lastname: string;
    nickname: string;
    role: string;
    token: string;
}

export class Auth implements IAuth {
    constructor(
        public id: string,
        public email: string,
        public name: string,
        public secondname: string,
        public lastname: string,
        public nickname: string,
        public role: string,
        public token: string
    ) { }
}