import { Produto } from "../../../src/entities/Produto";

describe("Produto", () => {
  it("should create an instance of Produto", () => {
    const produto = new Produto(
      "1",
      "Product Name",
      "Category",
      100,
      new Date("2023-01-01"),
      new Date("2023-01-02")
    );

    expect(produto).toBeInstanceOf(Produto);
    expect(produto.id).toBe("1");
    expect(produto.name).toBe("Product Name");
    expect(produto.category).toBe("Category");
    expect(produto.price).toBe(100);
    expect(produto.createdAt).toEqual(new Date("2023-01-01"));
    expect(produto.updatedAt).toEqual(new Date("2023-01-02"));
    expect(produto.deleted).toBeUndefined();
    expect(produto.deletedAt).toBeUndefined();
    expect(produto._id).toBeUndefined();
  });

  it("should create an instance of Produto with optional fields", () => {
    const produto = new Produto(
      "2",
      "Another Product",
      "Another Category",
      200,
      new Date("2023-02-01"),
      new Date("2023-02-02"),
      true,
      new Date("2023-02-03"),
      "unique_id"
    );

    expect(produto).toBeInstanceOf(Produto);
    expect(produto.id).toBe("2");
    expect(produto.name).toBe("Another Product");
    expect(produto.category).toBe("Another Category");
    expect(produto.price).toBe(200);
    expect(produto.createdAt).toEqual(new Date("2023-02-01"));
    expect(produto.updatedAt).toEqual(new Date("2023-02-02"));
    expect(produto.deleted).toBe(true);
    expect(produto.deletedAt).toEqual(new Date("2023-02-03"));
    expect(produto._id).toBe("unique_id");
  });
});
