import { TextReader } from "./TextReader";
import { SmartTextReader } from "./SmartTextReader";
import { SmartTextChecker } from "./SmartTextChecker";
import { SmartTextReaderLocker } from "./SmartTextReaderLocker";

console.log("\n==========================================");
console.log("--- Task 4 ---");
console.log("==========================================\n");

console.log("--- 1. Using SmartTextReader directly ---");
const realReader: TextReader = new SmartTextReader();
try {
  const content1 = realReader.readFile("sample.txt");
} catch (error) {
  console.error("Error reading with Real Reader:", error);
}
console.log("---\n");

console.log("--- 2. Using SmartTextChecker (Logging Proxy) ---");
const checkerReader: TextReader = new SmartTextChecker(new SmartTextReader());
try {
  const content2 = checkerReader.readFile("sample.txt");
} catch (error) {
  console.error("Error reading with Checker Proxy:", error);
}
console.log("---\n");

console.log("--- 3. Using SmartTextReaderLocker (Access Control Proxy) ---");
const lockerReader: TextReader = new SmartTextReaderLocker(
  new SmartTextReader(),
  /(\.log|secret\.txt)$/i
);

console.log("Attempting to read allowed file (sample.txt)...");
try {
  const content3 = lockerReader.readFile("sample.txt");
  console.log("Read allowed file successfully.");
} catch (error) {
  console.error("Error reading allowed file with Locker Proxy:", error);
}
console.log("");

console.log("Attempting to read restricted file (test.log)...");
try {
  lockerReader.readFile("test.log");
} catch (error) {
  if (error instanceof Error) {
    console.error(
      "Caught expected error reading restricted file:",
      error.message
    );
  } else {
    console.error("Caught unexpected error reading restricted file:", error);
  }
}
console.log("");

console.log("Attempting to read restricted file (secret.txt)...");
try {
  lockerReader.readFile("secret.txt");
} catch (error) {
  if (error instanceof Error) {
    console.error(
      "Caught expected error reading restricted file:",
      error.message
    );
  } else {
    console.error("Caught unexpected error reading restricted file:", error);
  }
}
console.log("---\n");

console.log("--- 4. Chaining Proxies (Locker -> Checker -> Reader) ---");
const chainedReader: TextReader = new SmartTextReaderLocker(
  new SmartTextChecker(new SmartTextReader()),
  /private/i
);

console.log("Attempting to read allowed file (sample.txt) through chain...");
try {
  const content4 = chainedReader.readFile("sample.txt");
  console.log("Read allowed file through chain successfully.");
} catch (error) {
  console.error("Error reading allowed file with Chained Proxy:", error);
}
console.log("");

console.log(
  "Attempting to read restricted file (private_data.txt) through chain..."
);
try {
  chainedReader.readFile("private_data.txt");
} catch (error) {
  if (error instanceof Error) {
    console.error(
      "Caught expected error reading restricted file with Chained Proxy:",
      error.message
    );
  } else {
    console.error(
      "Caught unexpected error reading restricted file with Chained Proxy:",
      error
    );
  }
}
console.log("---\n");

console.log("--- 5. Error Handling (File Not Found via Checker Proxy) ---");
try {
  checkerReader.readFile("non_existent_file.txt");
} catch (error) {
  if (error instanceof Error) {
    console.error(
      "Caught expected error for non-existent file:",
      error.message
    );
  } else {
    console.error("Caught unexpected error for non-existent file:", error);
  }
}
console.log("---\n");

console.log("\n--- End of Task 4 Demonstration ---");
