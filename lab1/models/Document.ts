export enum DocumentType {
    INCOMING = 'Incoming Invoice',
    OUTGOING = 'Outgoing Invoice',
    INVENTORY = 'Inventory Report'
  }
  
  export interface IDocument {
    getId(): string;
    getType(): DocumentType;
    getDate(): Date;
    toString(): string;
  }
  
  export abstract class Document implements IDocument {
    constructor(
      private readonly id: string,
      private readonly type: DocumentType,
      private readonly date: Date = new Date()
    ) {}
  
    getId(): string {
      return this.id;
    }
  
    getType(): DocumentType {
      return this.type;
    }
  
    getDate(): Date {
      return this.date;
    }
  
    abstract toString(): string;
  }