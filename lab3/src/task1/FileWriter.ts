export class FileWriter {
  private filePath: string;

  constructor(filePath: string = "log.txt") {
    this.filePath = filePath;
    console.log(`[FileWriter] Initialized for file: ${this.filePath}`);
  }

  public Write(text: string): void {
    console.log(`[FileWriter: ${this.filePath}] Write: ${text}`);
  }

  public WriteLine(text: string): void {
    console.log(`[FileWriter: ${this.filePath}] WriteLine: ${text}`);
  }
}
