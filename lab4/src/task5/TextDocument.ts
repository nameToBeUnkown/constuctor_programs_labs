export class TextDocumentMemento {
  public readonly content: string;
  private readonly timestamp: Date;

  constructor(content: string) {
    this.content = content;
    this.timestamp = new Date();
  }

  public getTimestamp(): Date {
    return this.timestamp;
  }

  public getDescription(): string {
    return `Snapshot from ${this.timestamp.toLocaleTimeString()}`;
  }
}

export class TextDocument {
  private content: string;

  constructor(initialContent: string = "") {
    this.content = initialContent;
    console.log(`Document created with initial content: "${this.content}"`);
  }

  public setContent(newContent: string): void {
    console.log(
      `Content changed from "${this.content.substring(
        0,
        30
      )}..." to "${newContent.substring(0, 30)}..."`
    );
    this.content = newContent;
  }

  public appendText(textToAppend: string): void {
    console.log(`Appending text: "${textToAppend}"`);
    this.content += textToAppend;
  }

  public getContent(): string {
    return this.content;
  }

  public save(): TextDocumentMemento {
    console.log("Saving current document state...");
    return new TextDocumentMemento(this.content);
  }

  public restore(memento: TextDocumentMemento): void {
    console.log(`Restoring document state from ${memento.getDescription()}...`);
    this.content = memento.content;
    console.log(`Content restored to: "${this.content.substring(0, 30)}..."`);
  }

  public print(): void {
    console.log("--- Current Document Content ---");
    console.log(this.content);
    console.log("------------------------------");
  }
}
