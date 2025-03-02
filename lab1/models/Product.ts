import { Money } from "./Money";

export enum ProductCategory {
  FOOD = "Food",
  ELECTRONICS = "Electronics",
  CLOTHING = "Clothing",
  HOUSEHOLD = "Household",
  OTHER = "Other",
}

export enum UnitOfMeasure {
  PIECE = "pc",
  KILOGRAM = "kg",
  LITER = "l",
  METER = "m",
}

export interface IProduct {
  getId(): string;
  getName(): string;
  getPrice(): Money;
  getCategory(): ProductCategory;
  getUnitOfMeasure(): UnitOfMeasure;
  reducePrice(amount: Money): void;
  toString(): string;
}

export class Product implements IProduct {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private price: Money,
    private readonly category: ProductCategory = ProductCategory.OTHER,
    private readonly unitOfMeasure: UnitOfMeasure = UnitOfMeasure.PIECE
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): Money {
    return this.price;
  }

  getCategory(): ProductCategory {
    return this.category;
  }

  getUnitOfMeasure(): UnitOfMeasure {
    return this.unitOfMeasure;
  }

  reducePrice(amount: Money): void {
    if (amount.getCurrency() !== this.price.getCurrency()) {
      throw new Error(
        `Currency mismatch: product is in ${this.price.getCurrency()}, reduction is in ${amount.getCurrency()}`
      );
    }

    try {
      this.price = this.price.subtract(amount);
    } catch (error) {
      throw new Error(`Cannot reduce price below zero: ${error.message}`);
    }
  }

  toString(): string {
    return `${this.name} (${this.id}) - ${this.price.toString()} per ${
      this.unitOfMeasure
    } - Category: ${this.category}`;
  }
}
