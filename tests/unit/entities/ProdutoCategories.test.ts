import { ProdutoCategories } from "../../../src/entities/ProdutoCategories";

describe("ProdutoCategories", () => {
  it("should have the correct enum values", () => {
    expect(ProdutoCategories.LANCHES).toBe("Lanches");
    expect(ProdutoCategories.BEBIDAS).toBe("Bebidas");
    expect(ProdutoCategories.ACOMPANHAMENTOS).toBe("Acompanhamentos");
    expect(ProdutoCategories.SOBREMESAS).toBe("Sobremesas");
  });

  it("should contain all enum keys", () => {
    const keys = Object.keys(ProdutoCategories);
    expect(keys).toContain("LANCHES");
    expect(keys).toContain("BEBIDAS");
    expect(keys).toContain("ACOMPANHAMENTOS");
    expect(keys).toContain("SOBREMESAS");
  });

  it("should contain all enum values", () => {
    const values = Object.values(ProdutoCategories);
    expect(values).toContain("Lanches");
    expect(values).toContain("Bebidas");
    expect(values).toContain("Acompanhamentos");
    expect(values).toContain("Sobremesas");
  });
});
