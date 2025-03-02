import { IProduct } from "./Product";
import { Money } from "./Money";
import { DocumentItem } from "./DocumentItem";
import { OutgoingInvoice } from "./OutgoingInvoice";
import { IReportingService } from "../services/ReportingService";

export class ShoppingCart {
  private items: Map<string, DocumentItem> = new Map();

  constructor(private readonly customer: string) {}

  addProduct(product: IProduct, quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Quantity must be positive");
    }

    const productId = product.getId();
    const existingItem = this.items.get(productId);

    if (existingItem) {
      // Create a new item with combined quantity
      const newItem = new DocumentItem(
        product,
        existingItem.getQuantity() + quantity
      );
      this.items.set(productId, newItem);
    } else {
      this.items.set(productId, new DocumentItem(product, quantity));
    }
  }

  removeProduct(productId: string): boolean {
    return this.items.delete(productId);
  }

  getCustomer(): string {
    return this.customer;
  }

  getItems(): DocumentItem[] {
    return Array.from(this.items.values());
  }

  getTotalAmount(): Money {
    if (this.items.size === 0) {
      return new Money(0, 0, "UAH");
    }

    let currency: string | null = null;
    let total: Money | null = null;

    for (const item of this.items.values()) {
      if (!currency) {
        currency = item.getProduct().getPrice().getCurrency();
        total = new Money(0, 0, currency);
      }

      if (item.getProduct().getPrice().getCurrency() !== currency) {
        throw new Error("Cannot calculate total with mixed currencies");
      }

      if (total) total = total.add(item.getTotalPrice());
    }

    return total || new Money(0, 0, "UAH");
  }

  checkout(reportingService: IReportingService): OutgoingInvoice {
    const invoice = reportingService.createOutgoingInvoice(this.customer);

    for (const item of this.items.values()) {
      invoice.addItem(item.getProduct(), item.getQuantity());
    }

    // Clear the cart after checkout
    this.items.clear();

    return invoice;
  }

  toString(): string {
    let result = `Shopping Cart for ${this.customer}\n`;
    result += `Items:\n`;

    for (const item of this.items.values()) {
      result += `- ${item.toString()}\n`;
    }

    result += `Total: ${this.getTotalAmount().toString()}`;
    return result;
  }
}
