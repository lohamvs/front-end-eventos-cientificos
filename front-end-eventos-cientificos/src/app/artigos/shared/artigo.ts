import { Autor } from "src/app/autores/shared/autor";

export class Artigo {
    constructor() {
        this.autores = new Array<Autor>();
    }

    id: number;
    ordem: number;
    idioma: string;
    tituloOriginal: string;
    tituloIngles: string;
    resumoOriginal: string;
    resumoIngles: string;
    palavrasChaveOriginais: string;
    palavrasChaveIngles: string;
    quantidadePaginas: number;
    autores: Array<Autor>;
}
