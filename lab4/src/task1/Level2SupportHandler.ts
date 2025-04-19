import { AbstractSupportHandler } from "./SupportHandler";

export class Level2SupportHandler extends AbstractSupportHandler {
  public handleRequest(requestLevel: number, choice: string): void {
    if (requestLevel !== 2) {
      this.passRequest(requestLevel, choice);
      return;
    }

    console.log("\n--- Level 2 Support ---");

    let handled = false;
    let nextChoice = "";

    switch (choice) {
      case "2":
        console.log("Technical Issue Options:");
        console.log("  a. Internet Connectivity");
        console.log("  b. Software Problem");
        console.log("  c. Hardware Malfunction");
        nextChoice = "a";
        break;
      case "3":
        console.log("Billing Question Options:");
        console.log("  x. Check Balance");
        console.log("  y. Dispute Charge");
        const billingChoice = "x";
        if (billingChoice === "x") {
          console.log("\n[Level 2 Support]: Checking your balance...");
          console.log("Your current balance is $XX.XX");
          console.log("Thank you for contacting support!");
          console.log("---------------------------------------\n");
          handled = true;
        } else {
          nextChoice = billingChoice;
        }
        break;
      case "4":
        console.log("Account Management Options:");
        console.log("  p. Update Contact Info");
        console.log("  q. Change Plan");
        const accountChoice = "p";
        if (accountChoice === "p") {
          console.log("\n[Level 2 Support]: Updating your contact info...");
          console.log("Your contact information has been updated.");
          console.log("Thank you for contacting support!");
          console.log("---------------------------------------\n");
          handled = true;
        } else {
          nextChoice = accountChoice;
        }
        break;
      default:
        console.log(
          "[Level 2 Support]: Unrecognized category, passing to next level..."
        );
        break;
    }
    console.log("-----------------------");

    if (!handled) {
      console.log(
        `[Level 2 Support]: Passing request (choice: ${
          nextChoice || choice
        }) to the next level...`
      );
      this.passRequest(requestLevel, nextChoice || choice);
    }
  }
}
