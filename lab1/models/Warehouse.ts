import { IProduct } from './Product';
import { IWarehouseItem, WarehouseItem } from './WarehouseItem';
import { Money } from './Money';

export interface IWarehouse {
  getName(): string;
  addItem(product: IProduct, quantity: number): void;
  getItem(productId: string): IWarehouseItem | undefined;
  hasEnoughStock(productId: string, quantity: number): boolean;
  getAllItems(): IWarehouseItem[];
  getTotalValue(): Money;
  toString(): string;
}

export class Warehouse implements IWarehouse {
  private items: Map<string, IWarehouseItem> = new Map();

  constructor(private readonly name: string) {}

  getName(): string {
    return this.name;
  }

  addItem(product: IProduct, quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Quantity must be positive");
    }
    
    const existingItem = this.items.get(product.getId());
    
    if (existingItem) {
      existingItem.addQuantity(quantity);
      existingItem.updateLastDeliveryDate(new Date());
    } else {
      const newItem = new WarehouseItem(product, quantity, new Date());
      this.items.set(product.getId(), newItem);
    }
  }

  getItem(productId: string): IWarehouseItem | undefined {
    return this.items.get(productId);
  }

  hasEnoughStock(productId: string, quantity: number): boolean {
    const item = this.items.get(productId);
    return !!item && item.getQuantity() >= quantity;
  }

  getAllItems(): IWarehouseItem[] {
    return Array.from(this.items.values());
  }

  getTotalValue(): Money {
    if (this.items.size === 0) {
      return new Money(0, 0, 'UAH');
    }
    
    let defaultCurrency: string | null = null;
    
    for (const item of this.items.values()) {
      if (!defaultCurrency) {
        defaultCurrency = item.getProduct().getPrice().getCurrency();
        break;
      }
    }
    
    if (!defaultCurrency) {
      return new Money(0, 0, 'UAH');
    }
    
    let totalValue = new Money(0, 0, defaultCurrency);
    
    for (const item of this.items.values()) {
      if (item.getProduct().getPrice().getCurrency() !== defaultCurrency) {
        throw new Error("Cannot calculate total value with mixed currencies");
      }
      
      totalValue = totalValue.add(item.getTotalValue());
    }
    
    return totalValue;
  }

  toString(): string {
    let result = `Warehouse: ${this.name}\n`;
    result += `Total Items: ${this.items.size}\n`;
    result += `Total Value: ${this.getTotalValue().toString()}\n`;
    result += `Items:\n`;
    
    for (const item of this.items.values()) {
      result += `- ${item.toString()}\n`;
    }
    
    return result;
  }
}