import { LightTextNode } from "./LightTextNode";
import { LightElementNode } from "./LightElementNode";
import { ImageNode } from "./ImageNode";

console.log("\n=============================================");
console.log("--- Task 5 ---");
console.log("=============================================\n");

const container = new LightElementNode("div", "block", "with-closing-tag", [
  "container",
]);

const heading = new LightElementNode("h1", "block", "with-closing-tag", [
  "title",
]);
heading.addChild(new LightTextNode("Welcome to LightHTML!"));

const paragraph = new LightElementNode("p", "block", "with-closing-tag");
paragraph.addChild(
  new LightTextNode("This is a paragraph created using the Composite pattern.")
);

container.addChild(heading);
container.addChild(paragraph);

console.log("\n--- Creating ImageNodes (Strategy Pattern) ---");
const networkImage = new ImageNode(
  "https://placehold.co/600x400/EEE/31343C",
  "Placeholder Network Image"
);

const fileSystemImage = new ImageNode("/images/local_icon.png", "Local Icon");
console.log("--------------------------------------------\n");

container.addChild(new LightTextNode("Here is a network image: "));
container.addChild(networkImage);
container.addChild(new LightTextNode(" And here is a local image: "));
container.addChild(fileSystemImage);

console.log("--- Container innerHTML ---");
console.log(container.innerHTML);
console.log("---------------------------\n");

console.log("--- Container outerHTML ---");
console.log(container.outerHTML);
console.log("---------------------------\n");

console.log("--- Heading outerHTML ---");
console.log(heading.outerHTML);
console.log("-------------------------\n");

console.log("--- Network Image outerHTML ---");
console.log(networkImage.outerHTML);
console.log("-----------------------------\n");

console.log("--- File System Image outerHTML ---");
console.log(fileSystemImage.outerHTML);
console.log("---------------------------------\n");

console.log("--- Paragraph Child Count ---");
console.log(`Paragraph has ${paragraph.ChildCount} child/children.`);
console.log("-----------------------------\n");

console.log("\n--- End of Task 5 Demonstration ---");
