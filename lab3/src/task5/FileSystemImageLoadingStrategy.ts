import { ImageLoadingStrategy } from "./ImageLoadingStrategy";

export class FileSystemImageLoadingStrategy implements ImageLoadingStrategy {
  loadImage(src: string): void {
    console.log(`Attempting to load image from File System: ${src}`);
    console.log(`--> Image '${src}' loaded successfully from File System.`);
  }
}
