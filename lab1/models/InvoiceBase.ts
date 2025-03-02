import { Document, DocumentType } from "./Document";
import { IDocumentItem, DocumentItem } from "./DocumentItem";
import { IProduct } from "./Product";
import { Money } from "./Money";

export abstract class InvoiceBase extends Document {
  protected items: IDocumentItem[] = [];

  addItem(product: IProduct, quantity: number): void {
    this.items.push(new DocumentItem(product, quantity));
  }

  getItems(): IDocumentItem[] {
    return [...this.items];
  }

  getTotalAmount(): Money {
    if (this.items.length === 0) {
      return new Money(0, 0, "UAH");
    }

    const currency = this.items[0].getProduct().getPrice().getCurrency();
    let total = new Money(0, 0, currency);

    for (const item of this.items) {
      if (item.getProduct().getPrice().getCurrency() !== currency) {
        throw new Error("Cannot calculate total with mixed currencies");
      }
      total = total.add(item.getTotalPrice());
    }

    return total;
  }
}
