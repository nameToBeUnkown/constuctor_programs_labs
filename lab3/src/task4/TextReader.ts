export interface TextReader {
  /**
   * Reads the content of a file and returns it as a 2D array of characters.
   * Outer array represents lines, inner array represents characters in a line.
   * @param filePath The path to the file to read.
   * @returns A 2D array of strings (characters).
   * @throws Error if the file cannot be read (e.g., doesn't exist).
   */
  readFile(filePath: string): string[][];
}
