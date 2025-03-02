import { Document, DocumentType } from "./Document";
import { IWarehouse } from "./Warehouse";

export class InventoryReport extends Document {
  constructor(
    id: string,
    private readonly warehouse: IWarehouse,
    date: Date = new Date()
  ) {
    super(id, DocumentType.INVENTORY, date);
  }

  getWarehouse(): IWarehouse {
    return this.warehouse;
  }

  toString(): string {
    let result = `INVENTORY REPORT #${this.getId()}\n`;
    result += `Date: ${this.getDate().toLocaleDateString()}\n`;
    result += `Warehouse: ${this.warehouse.getName()}\n`;
    result += `Total Items: ${this.warehouse.getAllItems().length}\n`;
    result += `Total Value: ${this.warehouse.getTotalValue().toString()}\n`;
    result += `Items:\n`;

    for (const item of this.warehouse.getAllItems()) {
      result += `- ${item.toString()}\n`;
    }

    return result;
  }
}
