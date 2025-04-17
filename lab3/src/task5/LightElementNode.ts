import { LightNode } from "./LightNode";

export type DisplayType = "block" | "inline";
export type ClosingType = "self-closing" | "with-closing-tag";

export class LightElementNode extends LightNode {
  private tagName: string;
  private displayType: DisplayType;
  private closingType: ClosingType;
  private cssClasses: string[] = [];
  private children: LightNode[] = [];

  constructor(
    tagName: string,
    displayType: DisplayType,
    closingType: ClosingType,
    cssClasses: string[] = []
  ) {
    super();
    this.tagName = tagName;
    this.displayType = displayType;
    this.closingType = closingType;
    this.cssClasses = cssClasses;
  }

  get TagName(): string {
    return this.tagName;
  }
  get DisplayType(): DisplayType {
    return this.displayType;
  }
  get ClosingType(): ClosingType {
    return this.closingType;
  }
  get CssClasses(): string[] {
    return [...this.cssClasses];
  }
  get ChildCount(): number {
    return this.children.length;
  }

  public addChild(node: LightNode): void {
    if (this.closingType === "self-closing") {
      console.warn(
        `Cannot add children to a self-closing tag <${this.tagName}>.`
      );
      return;
    }
    this.children.push(node);
  }

  public removeChild(node: LightNode): void {
    const index = this.children.indexOf(node);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  get innerHTML(): string {
    return this.children.map((child) => child.outerHTML).join("");
  }

  get outerHTML(): string {
    const classAttribute =
      this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(" ")}"` : "";

    let openTag = `<${this.tagName}${classAttribute}`;

    if (this.closingType === "self-closing") {
      return `${openTag} />`;
    } else {
      const closingTag = `</${this.tagName}>`;
      return `${openTag}>${this.innerHTML}${closingTag}`;
    }
  }

  public addClass(className: string): void {
    if (!this.cssClasses.includes(className)) {
      this.cssClasses.push(className);
    }
  }
}
