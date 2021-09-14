import { Artigo } from "src/app/artigos/shared/artigo";

export class Volume {
    constructor() {
        this.Artigos = new Array<Artigo>();
    }

    id: number;
    edicao: number;
    sigla: string;
    cidade: string;
    dataInicio: string;
    descricao: string;
    Artigos: Artigo[];
}
