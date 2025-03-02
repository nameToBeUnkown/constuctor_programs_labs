import { InvoiceBase } from './InvoiceBase';
import { DocumentType } from './Document';

export class IncomingInvoice extends InvoiceBase {
  constructor(
    id: string,
    private readonly supplier: string,
    date: Date = new Date()
  ) {
    super(id, DocumentType.INCOMING, date);
  }
  
  getSupplier(): string {
    return this.supplier;
  }
  
  toString(): string {
    let result = `INCOMING INVOICE #${this.getId()}\n`;
    result += `Date: ${this.getDate().toLocaleDateString()}\n`;
    result += `Supplier: ${this.supplier}\n`;
    result += `Items:\n`;
    
    for (const item of this.getItems()) {
      result += `- ${item.toString()}\n`;
    }
    
    result += `Total: ${this.getTotalAmount().toString()}`;
    return result;
  }
}