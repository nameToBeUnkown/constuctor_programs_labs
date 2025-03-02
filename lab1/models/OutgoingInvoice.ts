import { InvoiceBase } from './InvoiceBase';
import { DocumentType } from './Document';

export class OutgoingInvoice extends InvoiceBase {
  constructor(
    id: string,
    private readonly customer: string,
    date: Date = new Date()
  ) {
    super(id, DocumentType.OUTGOING, date);
  }
  
  getCustomer(): string {
    return this.customer;
  }
  
  toString(): string {
    let result = `OUTGOING INVOICE #${this.getId()}\n`;
    result += `Date: ${this.getDate().toLocaleDateString()}\n`;
    result += `Customer: ${this.customer}\n`;
    result += `Items:\n`;
    
    for (const item of this.getItems()) {
      result += `- ${item.toString()}\n`;
    }
    
    result += `Total: ${this.getTotalAmount().toString()}`;
    return result;
  }
}