import { TextDocument, TextDocumentMemento } from "./TextDocument";

export class TextEditor {
  private document: TextDocument;
  private history: TextDocumentMemento[] = [];

  constructor() {
    this.document = new TextDocument();
    this.saveState();
    console.log("Text Editor initialized with an empty document.");
  }

  public setContent(text: string): void {
    this.saveState();
    this.document.setContent(text);
  }

  public type(text: string): void {
    this.saveState();
    this.document.appendText(text);
  }

  public saveState(): void {
    const memento = this.document.save();
    this.history.push(memento);
    console.log(`State saved. History size: ${this.history.length}`);
  }

  public undo(): void {
    if (this.history.length <= 1) {
      console.log("Cannot undo: No previous state in history.");
      return;
    }

    const currentStateMemento = this.history.pop();
    console.log(
      `Popped state from ${
        currentStateMemento?.getDescription() ?? "N/A"
      } for undo.`
    );

    const previousMemento = this.history[this.history.length - 1];

    if (previousMemento) {
      console.log("Restoring previous state...");
      this.document.restore(previousMemento);
    } else {
      console.error("Error during undo: Could not find previous memento.");
      if (currentStateMemento) this.history.push(currentStateMemento);
    }
    console.log(`Undo complete. History size: ${this.history.length}`);
  }

  public printDocument(): void {
    this.document.print();
  }

  public printHistory(): void {
    console.log("\n--- Editor History (Mementos) ---");
    if (this.history.length === 0) {
      console.log("(No history saved)");
    } else {
      this.history.forEach((memento, index) => {
        console.log(
          `  [${index}]: ${memento.getDescription()} - Content snapshot: "${memento.content.substring(
            0,
            20
          )}..."`
        );
      });
    }
    console.log("--------------------------------");
  }
}
