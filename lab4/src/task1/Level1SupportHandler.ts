import { AbstractSupportHandler } from "./SupportHandler";

export class Level1SupportHandler extends AbstractSupportHandler {
  public handleRequest(requestLevel: number, choice: string): void {
    if (requestLevel !== 1) {
      this.passRequest(requestLevel, choice);
      return;
    }

    console.log("\n--- Welcome to Level 1 Support ---");
    console.log("Please choose an option:");
    console.log("1. General Information");
    console.log("2. Technical Issue");
    console.log("3. Billing Question");
    console.log("4. Account Management");
    console.log("---------------------------------");

    const userChoice = choice;

    if (userChoice === "1") {
      console.log("\n[Level 1 Support]: Providing general information...");
      console.log("Thank you for contacting support. Have a great day!");
      console.log("---------------------------------------\n");
    } else {
      console.log("[Level 1 Support]: Passing request to the next level...");
      this.passRequest(requestLevel, userChoice);
    }
  }
}
