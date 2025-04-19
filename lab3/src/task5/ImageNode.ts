import { LightNode } from "./LightNode";
import { ImageLoadingStrategy } from "./ImageLoadingStrategy";
import { NetworkImageLoadingStrategy } from "./NetworkImageLoadingStrategy";
import { FileSystemImageLoadingStrategy } from "./FileSystemImageLoadingStrategy";

export class ImageNode extends LightNode {
  private href: string;
  private loadingStrategy: ImageLoadingStrategy;
  private altText: string;

  constructor(href: string, altText: string = "Image") {
    super();
    this.href = href;
    this.altText = altText;
    this.loadingStrategy = this.determineStrategy(href);
    console.log(
      `ImageNode created for source "${href}". Using ${this.loadingStrategy.constructor.name}.`
    );
    this.loadImage();
  }

  private determineStrategy(src: string): ImageLoadingStrategy {
    if (src.startsWith("http://") || src.startsWith("https://")) {
      return new NetworkImageLoadingStrategy();
    } else {
      return new FileSystemImageLoadingStrategy();
    }
  }

  public loadImage(): void {
    this.loadingStrategy.loadImage(this.href);
  }

  get innerHTML(): string {
    return "";
  }

  get outerHTML(): string {
    return `<img src="${this.href}" alt="${this.altText}" />`;
  }
}
