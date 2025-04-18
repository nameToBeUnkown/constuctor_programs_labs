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

console.log("\n=============================================");
console.log("--- Task 4 (Lab 4) Event Listener Demo ---");
console.log("=============================================\n");

const handleHeadingClick = function (this: LightElementNode) {
  console.log(`>>> EVENT: Heading <${this.TagName}> clicked! <<<`);
  this.addClass("clicked");
  console.log(
    `Added 'clicked' class to <${
      this.TagName
    }>. Current classes: ${this.CssClasses.join(", ")}`
  );
};

const handleParagraphMouseOver = function (
  this: LightElementNode,
  eventArgs?: any
) {
  console.log(
    `>>> EVENT: Mouse over paragraph <${
      this.TagName
    }>! Event Args: ${JSON.stringify(eventArgs)} <<<`
  );
  this.addClass("hovered");
  console.log(
    `Added 'hovered' class to <${
      this.TagName
    }>. Current classes: ${this.CssClasses.join(", ")}`
  );
};

const handleContainerCustomEvent = (eventArgs?: any) => {
  console.log(
    `>>> EVENT: Custom 'layout-changed' event on container! Details: ${JSON.stringify(
      eventArgs
    )} <<<`
  );
};

const temporaryListener = () => {
  console.log(">>> EVENT: This listener will be removed shortly. <<<");
};

console.log("--- Adding Event Listeners ---");
heading.addEventListener("click", handleHeadingClick);
paragraph.addEventListener("mouseover", handleParagraphMouseOver);
container.addEventListener("layout-changed", handleContainerCustomEvent);
heading.addEventListener("click", temporaryListener);
heading.addEventListener("click", handleHeadingClick);
console.log("-----------------------------\n");

console.log("--- Removing a Listener ---");
heading.removeEventListener("click", temporaryListener);
heading.removeEventListener("nonexistent-event", temporaryListener);
heading.removeEventListener("click", () => {});
console.log("---------------------------\n");

console.log("--- Dispatching Events ---");
heading.dispatchEvent("click");
paragraph.dispatchEvent("mouseover", { x: 100, y: 50 });
container.dispatchEvent("layout-changed", { reason: "window resize" });
image.dispatchEvent("click");
heading.dispatchEvent("focus");
console.log("-------------------------\n");

console.log("--- Final State after Events ---");
console.log("Heading outerHTML:", heading.outerHTML);
console.log("Paragraph outerHTML:", paragraph.outerHTML);
console.log("------------------------------\n");

console.log("\n--- End of Task 5 & Task 4 (Lab 4) Demonstration ---");
