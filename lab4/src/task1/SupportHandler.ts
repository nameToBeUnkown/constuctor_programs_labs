export interface SupportHandler {
  setNext(handler: SupportHandler): SupportHandler;
  handleRequest(requestLevel: number, choice: string): void;
}

export abstract class AbstractSupportHandler implements SupportHandler {
  protected nextHandler: SupportHandler | null = null;

  public setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  public abstract handleRequest(requestLevel: number, choice: string): void;

  protected passRequest(requestLevel: number, choice: string): void {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(requestLevel + 1, choice);
    } else {
      console.log("\n---------------------------------------");
      console.log(
        "Sorry, we couldn't find the right support for your issue based on your selection."
      );
      console.log("Please try navigating the menu again.");
      console.log("---------------------------------------\n");
      throw new Error("RestartMenu");
    }
  }
}
