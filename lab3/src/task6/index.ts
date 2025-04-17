import * as fs from "fs";
import * as path from "path";
import { LightTextNode } from "../task5/LightTextNode";
import { LightElementNode } from "../task5/LightElementNode";
import { LightTextNodeFactory } from "./LightTextNodeFactory";

console.log("\n===============================================");
console.log("--- Task 6 ---");
console.log("===============================================\n");

function parseBookToLightHTML(
  bookContent: string,
  useFactory: boolean,
  factory?: LightTextNodeFactory
): LightElementNode {
  const root = new LightElementNode("div", "block", "with-closing-tag", [
    "book-content",
  ]);
  const lines = bookContent.replace(/\r\n/g, "\n").split("\n");

  lines.forEach((line, index) => {
    let element: LightElementNode;
    const trimmedLine = line.trim();

    if (index === 0) {
      element = new LightElementNode("h1", "block", "with-closing-tag");
    } else if (line.startsWith(" ")) {
      element = new LightElementNode("blockquote", "block", "with-closing-tag");
    } else if (line.length > 0 && line.length < 20) {
      element = new LightElementNode("h2", "block", "with-closing-tag");
    } else if (trimmedLine.length === 0) {
      return;
    } else {
      element = new LightElementNode("p", "block", "with-closing-tag");
    }

    if (trimmedLine.length > 0) {
      const textNode =
        useFactory && factory
          ? factory.getTextNode(trimmedLine)
          : new LightTextNode(trimmedLine);
      element.addChild(textNode);
    }
    root.addChild(element);
  });

  return root;
}

function measureMemory(label: string): number {
  if (global.gc) {
    global.gc();
  }
  const memoryUsage = process.memoryUsage();
  const heapUsedMB = memoryUsage.heapUsed / 1024 / 1024;
  console.log(`${label}: Heap used = ${heapUsedMB.toFixed(2)} MB`);
  return memoryUsage.heapUsed;
}

const bookPath = path.resolve(__dirname, "../../book.txt");
let bookContent: string;
try {
  bookContent = fs.readFileSync(bookPath, "utf-8");
  console.log(`Successfully read book file: ${bookPath}`);
} catch (error) {
  console.error(`Failed to read book file: ${bookPath}`, error);
  process.exit(1);
}
console.log("---");

console.log("Parsing book WITHOUT Flyweight Factory...");
const initialMemory = measureMemory("Memory before parsing (no factory)");
const treeWithoutFactory = parseBookToLightHTML(bookContent, false);
const memoryAfterNoFactory = measureMemory("Memory after parsing (no factory)");
const memoryUsedNoFactory = memoryAfterNoFactory - initialMemory;
console.log(
  `Memory increase WITHOUT factory: ${(
    memoryUsedNoFactory /
    1024 /
    1024
  ).toFixed(4)} MB`
);
console.log("---");

console.log("Parsing book WITH Flyweight Factory...");
const factory = new LightTextNodeFactory();
const memoryBeforeFactoryParse = measureMemory(
  "Memory before parsing (with factory)"
);
const treeWithFactory = parseBookToLightHTML(bookContent, true, factory);
const memoryAfterFactory = measureMemory("Memory after parsing (with factory)");
const memoryUsedWithFactory = memoryAfterFactory - memoryBeforeFactoryParse;
console.log(
  `Memory increase WITH factory: ${(
    memoryUsedWithFactory /
    1024 /
    1024
  ).toFixed(4)} MB`
);
console.log(
  `Flyweight Factory Cache Size (unique text nodes): ${factory.getCacheSize()}`
);
console.log("---");

console.log("--- Memory Comparison ---");
if (memoryUsedNoFactory > 0 && memoryUsedWithFactory > 0) {
  const reduction = memoryUsedNoFactory - memoryUsedWithFactory;
  const percentageReduction = (reduction / memoryUsedNoFactory) * 100;
  console.log(
    `Memory saved using Flyweight: ${(reduction / 1024 / 1024).toFixed(4)} MB`
  );
  console.log(
    `Memory reduction percentage: ${percentageReduction.toFixed(2)}%`
  );
} else {
  console.log(
    "Could not reliably compare memory usage (values might be zero or inconsistent)."
  );
}
console.log("---");

console.log("--- Sample Generated HTML (with factory) ---");
const sampleChildren = treeWithFactory.innerHTML
  .split("\n")
  .slice(0, 15)
  .join("\n");
console.log(sampleChildren + "\n...");
console.log("------------------------------------------");

console.log("\n--- End of Task 6 Demonstration ---");
