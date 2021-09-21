import { Artigo } from "src/app/artigos/shared/artigo";

export class Autor {
    id: number;
    ordem: number;
    email: string;
    primeiroNome: string;
    nomeDoMeio: string;
    sobrenome: string;
    afiliacao: string;
    afiliacaoIngles: string;
    nacao: string;
    orcId: string;
    artigo: Artigo;

    get nomeCompleto() {
        return this.primeiroNome + ' ' + this.sobrenome + ' ' + this.nomeDoMeio;
    }
}
