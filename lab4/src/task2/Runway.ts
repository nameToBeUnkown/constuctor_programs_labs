import { CommandCentre } from "./CommandCentre";
import { Aircraft } from "./Aircraft";

export class Runway {
  public readonly id: string = crypto.randomUUID();
  private commandCentre: CommandCentre;
  public isBusyWithAircraft: Aircraft | null = null;

  constructor(commandCentre: CommandCentre) {
    this.commandCentre = commandCentre;
    this.commandCentre.registerRunway(this);
    console.log(
      `Runway ${this.id} registered with Command Centre and is initially free.`
    );
    this.highlightGreen();
  }

  public occupy(aircraft: Aircraft): void {
    if (!this.isBusyWithAircraft) {
      this.isBusyWithAircraft = aircraft;
      console.log(
        `Runway ${this.id} is now occupied by Aircraft ${aircraft.name}.`
      );
      this.highlightRed();
      this.commandCentre.notifyRunwayBusy(this);
    } else {
      console.error(
        `Error: Runway ${this.id} is already busy with ${this.isBusyWithAircraft.name} but tried to occupy with ${aircraft.name}.`
      );
    }
  }

  public release(): void {
    if (this.isBusyWithAircraft) {
      const departingAircraftName = this.isBusyWithAircraft.name;
      console.log(
        `Runway ${this.id} is now released by Aircraft ${departingAircraftName}.`
      );
      this.isBusyWithAircraft = null;
      this.highlightGreen();
      this.commandCentre.notifyRunwayFree(this);
    } else {
      console.warn(
        `Warning: Runway ${this.id} was already free but received a release command.`
      );
    }
  }

  public highlightRed(): void {
    console.log(`Runway ${this.id} lights turned RED (Busy).`);
  }

  public highlightGreen(): void {
    console.log(`Runway ${this.id} lights turned GREEN (Free).`);
  }
}
