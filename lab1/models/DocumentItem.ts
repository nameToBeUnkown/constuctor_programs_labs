import { IProduct } from "./Product";
import { Money } from "./Money";

export interface IDocumentItem {
  getProduct(): IProduct;
  getQuantity(): number;
  getTotalPrice(): Money;
  toString(): string;
}

export class DocumentItem implements IDocumentItem {
  constructor(
    private readonly product: IProduct,
    private readonly quantity: number
  ) {
    if (quantity <= 0) {
      throw new Error("Quantity must be positive");
    }
  }

  getProduct(): IProduct {
    return this.product;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getTotalPrice(): Money {
    return this.product.getPrice().multiply(this.quantity);
  }

  toString(): string {
    return `${this.product.getName()} - ${
      this.quantity
    } ${this.product.getUnitOfMeasure()} x ${this.product
      .getPrice()
      .toString()} = ${this.getTotalPrice().toString()}`;
  }
}
