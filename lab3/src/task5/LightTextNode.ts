import { LightNode } from "./LightNode";

export class LightTextNode extends LightNode {
  private textContent: string;

  constructor(text: string) {
    super();
    this.textContent = text;
  }

  get outerHTML(): string {
    return this.textContent;
  }
}
