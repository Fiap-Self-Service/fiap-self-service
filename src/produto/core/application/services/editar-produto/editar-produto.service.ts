import { Injectable } from "@nestjs/common";
import { IProdutoRepository } from "../../repository/produto-repository.port";
import { IEditarProdutoUseCase } from "./editar-produto.use-case";
import { Produto } from "src/produto/core/domain/produto";

@Injectable()
export class EditarProdutoService implements IEditarProdutoUseCase {
  constructor(private readonly produtoRepository: IProdutoRepository) {}
  async editarProduto(produto: Produto): Promise<Produto> {
    return await this.produtoRepository.editarProduto(produto);
  }
}
