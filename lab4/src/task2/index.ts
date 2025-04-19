import { CommandCentre } from "./CommandCentre";
import { Aircraft } from "./Aircraft";
import { Runway } from "./Runway";

console.log("===== Air Traffic Control Simulation =====");
console.log("Initializing simulation...\n");

const commandCentre = new CommandCentre();

console.log("\n--- Creating Runways ---");
const runway1 = new Runway(commandCentre);
const runway2 = new Runway(commandCentre);

console.log("\n--- Creating Aircraft ---");
const aircraft1 = new Aircraft("Boeing 747 (Flight A123)", commandCentre);
const aircraft2 = new Aircraft("Airbus A380 (Flight B456)", commandCentre);
const aircraft3 = new Aircraft("Cessna 172 (Flight C789)", commandCentre);

console.log("\n--- Starting Operations ---");

console.log("\n--- Scenario 1: Aircraft 1 Landing ---");
aircraft1.requestLand();

console.log("\n--- Scenario 2: Aircraft 2 Landing ---");
aircraft2.requestLand();

console.log("\n--- Scenario 3: Aircraft 3 Landing Attempt (Denied) ---");
aircraft3.requestLand();

console.log("\n--- Scenario 4: Aircraft 1 Takeoff ---");
aircraft1.requestTakeOff();

console.log("\n--- Scenario 5: Aircraft 3 Landing Attempt (Success) ---");
aircraft3.requestLand();

console.log("\n--- Scenario 6: Aircraft 2 Takeoff ---");
aircraft2.requestTakeOff();

console.log("\n--- Scenario 7: Aircraft 3 Takeoff ---");
aircraft3.requestTakeOff();

console.log("\n===== Simulation Complete =====");
