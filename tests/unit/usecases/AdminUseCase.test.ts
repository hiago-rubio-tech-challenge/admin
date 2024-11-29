import { AdminUseCase } from "../../../src/usecases/AdminUseCase";
import { IAdminRepository } from "../../../src/gateways/AdminRepository";
import { Produto } from "../../../src/entities/Produto";
import { ICreateProduto, IUpdateProduto } from "../../../src/interfaces";
import { ProdutoCategories } from "../../../src/entities/ProdutoCategories";

describe("AdminUseCase", () => {
  it("should find products by category", async () => {
    const adminRepository: IAdminRepository = {
      findProdutoByCategory: jest.fn(),
      createProduto: jest.fn(),
      updateProduto: jest.fn(),
      deleteProduto: jest.fn(),
    };

    const adminUseCase = new AdminUseCase(adminRepository);

    const result = await adminUseCase.findProdutoByCategory(
      ProdutoCategories.ACOMPANHAMENTOS
    );

    expect(adminRepository.findProdutoByCategory).toHaveBeenCalledWith(
      ProdutoCategories.ACOMPANHAMENTOS
    );
  });

  it("should create a product", async () => {
    const adminRepository: IAdminRepository = {
      findProdutoByCategory: jest.fn(),
      createProduto: jest.fn(),
      updateProduto: jest.fn(),
      deleteProduto: jest.fn(),
    };

    const adminUseCase = new AdminUseCase(adminRepository);

    const produto: ICreateProduto = {
      name: "Hambuguer",
      category: ProdutoCategories.ACOMPANHAMENTOS,
      price: 10,
    };

    const result = await adminUseCase.createProduto(produto);

    expect(adminRepository.createProduto).toHaveBeenCalledWith(produto);
  });

  it("should update a product", async () => {
    const adminRepository: IAdminRepository = {
      findProdutoByCategory: jest.fn(),
      createProduto: jest.fn(),
      updateProduto: jest.fn(),
      deleteProduto: jest.fn(),
    };

    const adminUseCase = new AdminUseCase(adminRepository);

    const produto: IUpdateProduto = {
      id: "123",
      name: "Hambuguer",
      category: ProdutoCategories.ACOMPANHAMENTOS,
      price: 10,
    };

    const result = await adminUseCase.updateProduto(produto);

    expect(adminRepository.updateProduto).toHaveBeenCalledWith(produto);
  });
});
