import { FileWriter } from "./FileWriter";

export class FileLogger {
  private fileWriter: FileWriter;

  constructor(filePath: string = "adapter_log.txt") {
    this.fileWriter = new FileWriter(filePath);
  }

  public Log(message: string): void {
    this.fileWriter.WriteLine(`[LOG]: ${message}`);
  }

  public Error(message: string): void {
    this.fileWriter.WriteLine(`[ERROR]: ${message}`);
  }

  public Warn(message: string): void {
    this.fileWriter.WriteLine(`[WARN]: ${message}`);
  }
}
