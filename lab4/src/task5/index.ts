import { TextEditor } from "./TextEditor";

console.log("===== Memento Pattern - Text Editor Undo Simulation =====");

const editor = new TextEditor();

console.log("\n--- Initial State ---");
editor.printDocument();
editor.printHistory();

console.log("\n--- Typing some text ---");
editor.type("Hello");
editor.printDocument();
editor.printHistory();

console.log("\n--- Typing more text ---");
editor.type(", World!");
editor.printDocument();
editor.printHistory();

console.log("\n--- Setting completely new content ---");
editor.setContent("This is the new content.");
editor.printDocument();
editor.printHistory();

console.log("\n--- Performing Undo 1 ---");
editor.undo();
editor.printDocument();
editor.printHistory();

console.log("\n--- Performing Undo 2 ---");
editor.undo();
editor.printDocument();
editor.printHistory();

console.log("\n--- Performing Undo 3 ---");
editor.undo();
editor.printDocument();
editor.printHistory();

console.log("\n--- Performing Undo 4 (Should fail) ---");
editor.undo();
editor.printDocument();
editor.printHistory();

console.log("\n--- Typing after undos ---");
editor.type("Start typing again.");
editor.printDocument();
editor.printHistory();

console.log("\n===== Simulation Complete =====");
