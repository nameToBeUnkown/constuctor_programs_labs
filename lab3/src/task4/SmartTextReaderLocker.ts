import { TextReader } from "./TextReader";

export class SmartTextReaderLocker implements TextReader {
  private reader: TextReader;
  private restrictionPattern: RegExp;

  constructor(reader: TextReader, restrictionPattern: RegExp) {
    this.reader = reader;
    this.restrictionPattern = restrictionPattern;
    console.log(
      `[SmartTextReaderLocker] Initialized with restriction pattern: ${restrictionPattern}`
    );
  }

  public readFile(filePath: string): string[][] {
    console.log(
      `[SmartTextReaderLocker] Checking access for file: ${filePath}`
    );

    if (this.restrictionPattern.test(filePath)) {
      console.error(
        `[SmartTextReaderLocker] Access denied! File path matches restriction: ${filePath}`
      );
      throw new Error(`Access denied to file: ${filePath}`);
    } else {
      console.log(
        `[SmartTextReaderLocker] Access granted. Proceeding to read file: ${filePath}`
      );
      return this.reader.readFile(filePath);
    }
  }
}
