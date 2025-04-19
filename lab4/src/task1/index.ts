import { Level1SupportHandler } from "./Level1SupportHandler";
import { Level2SupportHandler } from "./Level2SupportHandler";
import { Level3SupportHandler } from "./Level3SupportHandler";
import { Level4SupportHandler } from "./Level4SupportHandler";
import { SupportHandler } from "./SupportHandler";

console.log("===== User Support System Simulation =====");

const level1 = new Level1SupportHandler();
const level2 = new Level2SupportHandler();
const level3 = new Level3SupportHandler();
const level4 = new Level4SupportHandler();

level1.setNext(level2).setNext(level3).setNext(level4);

const simulateSupportRequest = (
  initialChoice: string,
  supportChain: SupportHandler
) => {
  let currentChoice = initialChoice;
  let level = 1;

  while (true) {
    try {
      console.log(
        `\n>>> Simulating User Choice at Level ${level}: '${currentChoice}' <<<`
      );
      supportChain.handleRequest(level, currentChoice);
      console.log(">>> Request Handled Successfully <<<");
      break;
    } catch (error: any) {
      if (error.message === "RestartMenu") {
        console.log(">>> Request Not Handled by Chain - Restarting Menu <<<");
        level = 1;
        currentChoice = "5";
        console.log("--- Restarting simulation with choice '5' ---");
      } else {
        console.error("An unexpected error occurred:", error);
        break;
      }
    }
  }
  console.log("==========================================");
};

console.log("\n--- Scenario 1: Handled at Level 1 ---");
simulateSupportRequest("1", level1);

console.log("\n--- Scenario 2: Handled at Level 2 ---");
simulateSupportRequest("3", level1);

console.log("\n--- Scenario 3: Handled at Level 3 ---");
simulateSupportRequest("2", level1);

console.log(
  "\n--- Scenario 4: Handled at Level 4 (Simulated Hardware Issue) ---"
);

console.log("--- (Adjusting simulation for L4 'No Connection' path) ---");

console.log("\n--- Scenario 4: Handled at Level 4 (Fallback/Escalation) ---");
simulateSupportRequest("XYZ", level1);

console.log("\n--- Scenario 5: Not Handled - Restart ---");

console.log("--- (Simulating unhandled request for restart) ---");

console.log("--- Scenario 5: Simulating loop directly ---");
try {
  console.log("\n>>> Simulating choice 'unhandled' reaching end of chain <<<");
  level4.handleRequest(4, "unhandled_choice");
  throw new Error("RestartMenu");
} catch (error: any) {
  if (error.message === "RestartMenu") {
    console.log(
      ">>> Request Not Handled by Chain - Restarting Menu (Simulated) <<<"
    );
    console.log(
      "--- Restarting simulation with choice '1' (will be handled) ---"
    );
    simulateSupportRequest("1", level1);
  }
}

console.log("\n===== Simulation Complete =====");
