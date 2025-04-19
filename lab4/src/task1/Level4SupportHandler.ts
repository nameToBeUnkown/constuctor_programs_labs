import { AbstractSupportHandler } from "./SupportHandler";

export class Level4SupportHandler extends AbstractSupportHandler {
  public handleRequest(requestLevel: number, choice: string): void {
    if (requestLevel !== 4) {
      this.passRequest(requestLevel, choice);
      return;
    }

    console.log("\n--- Level 4 Support ---");
    let handled = false;

    switch (choice) {
      case "ii":
        console.log(
          "\n[Level 4 Support]: Troubleshooting 'No Connection' issue..."
        );
        console.log(
          "We will need to perform diagnostics. Please prepare for a remote session or technician visit."
        );
        console.log("Thank you for contacting support!");
        console.log("---------------------------------------\n");
        handled = true;
        break;
      case "c":
        console.log(
          "\n[Level 4 Support]: Handling hardware malfunction report..."
        );
        console.log(
          "Please provide the device model and serial number. We will arrange for repair or replacement according to your warranty."
        );
        console.log("Thank you for contacting support!");
        console.log("---------------------------------------\n");
        handled = true;
        break;
      default:
        console.log(
          `[Level 4 Support]: Received specific request '${choice}', escalating...`
        );
        console.log(
          "Your issue requires specialized attention. We are transferring you to an expert."
        );
        console.log("Thank you for contacting support!");
        console.log("---------------------------------------\n");
        handled = true;
        break;
    }
    console.log("-----------------------");

    if (!handled) {
      console.log(
        `[Level 4 Support]: Could not handle request '${choice}', ending session.`
      );
      this.passRequest(requestLevel, choice);
    }
  }
}
