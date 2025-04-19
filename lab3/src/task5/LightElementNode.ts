import { LightNode } from "./LightNode";

export type DisplayType = "block" | "inline";
export type ClosingType = "self-closing" | "with-closing-tag";

export class LightElementNode extends LightNode {
  private tagName: string;
  private displayType: DisplayType;
  private closingType: ClosingType;
  private cssClasses: string[] = [];
  private children: LightNode[] = [];
  private eventListeners: Record<string, Function[]> = {};

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

  public addEventListener(eventType: string, listener: Function): void {
    if (!this.eventListeners[eventType]) {
      this.eventListeners[eventType] = [];
    }
    if (!this.eventListeners[eventType].includes(listener)) {
      this.eventListeners[eventType].push(listener);
      console.log(
        `Listener added for '${eventType}' event on <${this.tagName}>.`
      );
    } else {
      console.log(
        `Listener already exists for '${eventType}' event on <${this.tagName}>.`
      );
    }
  }

  public removeEventListener(eventType: string, listener: Function): void {
    if (this.eventListeners[eventType]) {
      const index = this.eventListeners[eventType].indexOf(listener);
      if (index > -1) {
        this.eventListeners[eventType].splice(index, 1);
        console.log(
          `Listener removed for '${eventType}' event on <${this.tagName}>.`
        );
        if (this.eventListeners[eventType].length === 0) {
          delete this.eventListeners[eventType];
        }
      } else {
        console.log(
          `Listener not found for '${eventType}' event on <${this.tagName}>.`
        );
      }
    } else {
      console.log(
        `No listeners found for '${eventType}' event on <${this.tagName}>.`
      );
    }
  }

  public dispatchEvent(eventType: string, eventArgs?: any): void {
    console.log(`\nDispatching '${eventType}' event on <${this.tagName}>...`);
    const listeners = this.eventListeners[eventType];
    if (listeners && listeners.length > 0) {
      [...listeners].forEach((listener) => {
        try {
          listener.call(this, eventArgs);
        } catch (error) {
          console.error(
            `Error executing listener for '${eventType}' on <${this.tagName}>:`,
            error
          );
        }
      });
      console.log(
        `Finished dispatching '${eventType}' event on <${this.tagName}>. ${listeners.length} listener(s) executed.`
      );
    } else {
      console.log(
        `No listeners registered for '${eventType}' event on <${this.tagName}>.`
      );
    }
  }
}
