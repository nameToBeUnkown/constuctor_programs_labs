import { LightTextNode } from "./LightTextNode";
import { LightElementNode } from "./LightElementNode";

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

const image = new LightElementNode("img", "inline", "self-closing", ["icon"]);

container.addChild(heading);
container.addChild(paragraph);
container.addChild(new LightTextNode("Here is an image: "));
container.addChild(image);

console.log("--- Container innerHTML ---");
console.log(container.innerHTML);
console.log("---------------------------\n");

console.log("--- Container outerHTML ---");
console.log(container.outerHTML);
console.log("---------------------------\n");

console.log("--- Heading outerHTML ---");
console.log(heading.outerHTML);
console.log("-------------------------\n");

console.log("--- Image outerHTML ---");
console.log(image.outerHTML);
console.log("-----------------------\n");

console.log("--- Paragraph Child Count ---");
console.log(`Paragraph has ${paragraph.ChildCount} child/children.`);
console.log("-----------------------------\n");

console.log("\n--- End of Task 5 Demonstration ---");
