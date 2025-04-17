import { TextReader } from "./TextReader";

export class SmartTextChecker implements TextReader {
  private reader: TextReader;

  constructor(reader: TextReader) {
    this.reader = reader;
    console.log("[SmartTextChecker] Initialized.");
  }

  public readFile(filePath: string): string[][] {
    console.log(`[SmartTextChecker] Attempting to open file: ${filePath}`);
    try {
      const content = this.reader.readFile(filePath);

      console.log(`[SmartTextChecker] Successfully read file: ${filePath}`);
      const lineCount = content.length;
      const charCount = content.reduce((sum, line) => sum + line.length, 0);
      console.log(`[SmartTextChecker] Total lines: ${lineCount}`);
      console.log(`[SmartTextChecker] Total characters: ${charCount}`);
      console.log(`[SmartTextChecker] Closing file: ${filePath}`);

      return content;
    } catch (error) {
      console.error(
        `[SmartTextChecker] Failed to read file: ${filePath}`,
        error
      );
      throw error;
    }
  }
}
