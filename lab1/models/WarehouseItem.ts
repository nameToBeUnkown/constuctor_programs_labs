import { IProduct } from './Product';
import { Money } from './Money';

export interface IWarehouseItem {
  getProduct(): IProduct;
  getQuantity(): number;
  getLastDeliveryDate(): Date;
  addQuantity(amount: number): void;
  removeQuantity(amount: number): void;
  updateLastDeliveryDate(date: Date): void;
  getTotalValue(): Money;
  toString(): string;
}

export class WarehouseItem implements IWarehouseItem {
  constructor(
    private readonly product: IProduct,
    private quantity: number = 0,
    private lastDeliveryDate: Date = new Date()
  ) {}

  getProduct(): IProduct {
    return this.product;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getLastDeliveryDate(): Date {
    return this.lastDeliveryDate;
  }

  addQuantity(amount: number): void {
    if (amount < 0) {
      throw new Error("Cannot add negative quantity");
    }
    this.quantity += amount;
  }

  removeQuantity(amount: number): void {
    if (amount < 0) {
      throw new Error("Cannot remove negative quantity");
    }
    
    if (amount > this.quantity) {
      throw new Error(`Insufficient quantity: requested ${amount}, available ${this.quantity}`);
    }
    
    this.quantity -= amount;
  }

  updateLastDeliveryDate(date: Date): void {
    this.lastDeliveryDate = date;
  }

  getTotalValue(): Money {
    return this.product.getPrice().multiply(this.quantity);
  }

  toString(): string {
    return `${this.product.toString()} | Quantity: ${this.quantity} ${this.product.getUnitOfMeasure()} | Last delivery: ${this.lastDeliveryDate.toLocaleDateString()}`;
  }
}
