import { CommandCentre } from "./CommandCentre";

export class Aircraft {
  public readonly name: string;
  private commandCentre: CommandCentre;
  public isTakingOff: boolean = false;

  constructor(name: string, commandCentre: CommandCentre) {
    this.name = name;
    this.commandCentre = commandCentre;
    this.commandCentre.registerAircraft(this);
    console.log(`Aircraft ${this.name} registered with Command Centre.`);
  }

  public requestLand(): void {
    console.log(`Aircraft ${this.name} requests permission to land.`);
    this.commandCentre.requestToLand(this);
  }

  public confirmLanding(): void {
    console.log(`Aircraft ${this.name} has landed successfully.`);
    this.isTakingOff = false;
  }

  public requestTakeOff(): void {
    console.log(`Aircraft ${this.name} requests permission to take off.`);
    this.commandCentre.requestToTakeOff(this);
  }

  public confirmTakeOff(): void {
    console.log(`Aircraft ${this.name} has taken off successfully.`);
    this.isTakingOff = true;
  }

  public receiveNotification(message: string): void {
    console.log(`[Aircraft ${this.name} Notification]: ${message}`);
  }
}

export interface CommandCentreMediator {
  registerAircraft(aircraft: Aircraft): void;
  registerRunway(runway: any): void;
  requestToLand(aircraft: Aircraft): void;
  requestToTakeOff(aircraft: Aircraft): void;
  notifyRunwayFree(runway: any): void;
  notifyRunwayBusy(runway: any): void;
}
