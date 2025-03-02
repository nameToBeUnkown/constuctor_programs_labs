import { IDocument } from '../models/Document';
import { IncomingInvoice } from '../models/IncomingInvoice';
import { OutgoingInvoice } from '../models/OutgoingInvoice';
import { InventoryReport } from '../models/InventoryReport';
import { IWarehouse } from '../models/Warehouse';
import { IDGenerator } from './IDGenerator';

export interface IReportingService {
  createIncomingInvoice(supplier: string): IncomingInvoice;
  createOutgoingInvoice(customer: string): OutgoingInvoice;
  createInventoryReport(warehouse: IWarehouse): InventoryReport;
  processIncomingInvoice(invoice: IncomingInvoice, warehouse: IWarehouse): boolean;
  processOutgoingInvoice(invoice: OutgoingInvoice, warehouse: IWarehouse): boolean;
  getDocumentById(id: string): IDocument | undefined;
  getAllDocuments(): IDocument[];
}

export class ReportingService implements IReportingService {
  private documents: Map<string, IDocument> = new Map();
  
  createIncomingInvoice(supplier: string): IncomingInvoice {
    const id = IDGenerator.generate('IN');
    const invoice = new IncomingInvoice(id, supplier);
    this.documents.set(id, invoice);
    return invoice;
  }
  
  createOutgoingInvoice(customer: string): OutgoingInvoice {
    const id = IDGenerator.generate('OUT');
    const invoice = new OutgoingInvoice(id, customer);
    this.documents.set(id, invoice);
    return invoice;
  }
  
  createInventoryReport(warehouse: IWarehouse): InventoryReport {
    const id = IDGenerator.generate('INV');
    const report = new InventoryReport(id, warehouse);
    this.documents.set(id, report);
    return report;
  }
  
  processIncomingInvoice(invoice: IncomingInvoice, warehouse: IWarehouse): boolean {
    try {
      for (const item of invoice.getItems()) {
        warehouse.addItem(item.getProduct(), item.getQuantity());
      }
      return true;
    } catch (error) {
      console.error(`Failed to process incoming invoice: ${error.message}`);
      return false;
    }
  }
  
  processOutgoingInvoice(invoice: OutgoingInvoice, warehouse: IWarehouse): boolean {
    try {
      // First validate that all products are available in sufficient quantity
      for (const item of invoice.getItems()) {
        const productId = item.getProduct().getId();
        if (!warehouse.hasEnoughStock(productId, item.getQuantity())) {
          const warehouseItem = warehouse.getItem(productId);
          const availableQuantity = warehouseItem ? warehouseItem.getQuantity() : 0;
          throw new Error(
            `Insufficient stock for product ${item.getProduct().getName()}: ` +
            `requested ${item.getQuantity()}, available ${availableQuantity}`
          );
        }
      }
      
      // Then remove all products
      for (const item of invoice.getItems()) {
        const warehouseItem = warehouse.getItem(item.getProduct().getId());
        if (warehouseItem) {
          warehouseItem.removeQuantity(item.getQuantity());
        }
      }
      
      return true;
    } catch (error) {
      console.error(`Failed to process outgoing invoice: ${error.message}`);
      return false;
    }
  }
  
  getDocumentById(id: string): IDocument | undefined {
    return this.documents.get(id);
  }
  
  getAllDocuments(): IDocument[] {
    return Array.from(this.documents.values());
  }
}