export type Produto = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorkg: number;
    ativo: string;
    imagem: string;
    categoriaId: number[]
}