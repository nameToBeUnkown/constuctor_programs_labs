import { AbstractSupportHandler } from "./SupportHandler";

export class Level3SupportHandler extends AbstractSupportHandler {
  public handleRequest(requestLevel: number, choice: string): void {
    if (requestLevel !== 3) {
      this.passRequest(requestLevel, choice);
      return;
    }

    console.log("\n--- Level 3 Support ---");
    let handled = false;
    let nextChoice = "";

    switch (choice) {
      case "a":
        console.log("Internet Connectivity Issue Options:");
        console.log("    i. Slow Speed");
        console.log("   ii. No Connection");
        const internetChoice = "i";
        if (internetChoice === "i") {
          console.log(
            "\n[Level 3 Support]: Troubleshooting slow internet speed..."
          );
          console.log(
            "Please restart your modem and router. If the issue persists, contact your ISP."
          );
          console.log("Thank you for contacting support!");
          console.log("---------------------------------------\n");
          handled = true;
        } else {
          nextChoice = internetChoice;
        }
        break;
      case "b":
        console.log("\n[Level 3 Support]: Addressing software problem...");
        console.log(
          "Please provide details about the software and the error message."
        );
        console.log("Thank you for contacting support!");
        console.log("---------------------------------------\n");
        handled = true;
        break;
      case "y":
        console.log("\n[Level 3 Support]: Handling charge dispute...");
        console.log(
          "Please provide the transaction ID and reason for the dispute."
        );
        console.log("Thank you for contacting support!");
        console.log("---------------------------------------\n");
        handled = true;
        break;
      case "q":
        console.log("\n[Level 3 Support]: Assisting with plan change...");
        console.log(
          "Please visit our website or contact sales to discuss plan options."
        );
        console.log("Thank you for contacting support!");
        console.log("---------------------------------------\n");
        handled = true;
        break;
      default:
        console.log(
          "[Level 3 Support]: Could not handle specific request, passing on..."
        );
        nextChoice = choice;
        break;
    }
    console.log("-----------------------");

    if (!handled) {
      console.log(
        `[Level 3 Support]: Passing request (choice: ${nextChoice}) to the next level...`
      );
      this.passRequest(requestLevel, nextChoice);
    }
  }
}
