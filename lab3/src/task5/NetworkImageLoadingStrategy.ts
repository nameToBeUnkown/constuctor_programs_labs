import { ImageLoadingStrategy } from "./ImageLoadingStrategy";

export class NetworkImageLoadingStrategy implements ImageLoadingStrategy {
  loadImage(src: string): void {
    console.log(`Attempting to load image from Network: ${src}`);
    console.log(`--> Image '${src}' loaded successfully via Network.`);
  }
}
