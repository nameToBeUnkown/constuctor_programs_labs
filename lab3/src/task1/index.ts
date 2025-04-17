import { FileLogger } from "./FileLogger";
import { Logger } from "./Logger";

console.log("--- Task 1: Demonstrating Console Logger ---");
const consoleLogger = new Logger();
consoleLogger.Log("This is a log message.");
consoleLogger.Error("This is an error message.");
consoleLogger.Warn("This is a warning message.");

console.log("\n--- Task 1: Demonstrating File Logger (Adapter) ---");
const fileLogger = new FileLogger("app_log.txt");
fileLogger.Log("This log will be 'written' to a file.");
fileLogger.Error("This error will be 'written' to a file.");
fileLogger.Warn("This warning will be 'written' to a file.");

console.log("\n--- End of Task 1 Demonstration ---");
