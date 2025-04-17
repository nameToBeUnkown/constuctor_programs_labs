import { TextReader } from "./TextReader";
import * as fs from "fs";
import * as path from "path";

export class SmartTextReader implements TextReader {
  public readFile(filePath: string): string[][] {
    const absolutePath = path.resolve(process.cwd(), filePath);
    console.log(`[SmartTextReader] Attempting to open file: ${absolutePath}`);

    try {
      const fileContent: string = fs.readFileSync(absolutePath, "utf-8");
      console.log(`[SmartTextReader] Successfully read file: ${filePath}`);

      console.log(`[SmartTextReader] Parsing file content...`);
      const lines = fileContent.replace(/\r\n/g, "\n").split("\n");

      const result: string[][] = lines.map((line) => line.split(""));

      console.log(
        `[SmartTextReader] Closing file (implicitly done after read): ${filePath}`
      );
      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `[SmartTextReader] Error reading file ${filePath}: ${error.message}`
        );
        throw new Error(`Failed to read file ${filePath}: ${error.message}`);
      } else {
        console.error(
          `[SmartTextReader] An unknown error occurred while reading ${filePath}`
        );
        throw new Error(`An unknown error occurred while reading ${filePath}`);
      }
    }
  }
}
