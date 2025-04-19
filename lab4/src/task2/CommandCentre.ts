import { Aircraft } from "./Aircraft";
import { Runway } from "./Runway";

export interface CommandCentreMediator {
  registerAircraft(aircraft: Aircraft): void;
  registerRunway(runway: Runway): void;
  requestToLand(aircraft: Aircraft): boolean;
  requestToTakeOff(aircraft: Aircraft): boolean;
  notifyRunwayFree(runway: Runway): void;
  notifyRunwayBusy(runway: Runway): void;
  findRunwayForAircraft(aircraft: Aircraft): Runway | null;
}

export class CommandCentre implements CommandCentreMediator {
  private aircrafts: Map<string, Aircraft> = new Map();
  private runways: Map<string, Runway> = new Map();
  private aircraftLocations: Map<Aircraft, Runway> = new Map();

  constructor() {
    console.log("Command Centre initialized.");
  }

  public registerAircraft(aircraft: Aircraft): void {
    if (!this.aircrafts.has(aircraft.name)) {
      this.aircrafts.set(aircraft.name, aircraft);
    } else {
      console.warn(`Aircraft ${aircraft.name} is already registered.`);
    }
  }

  public registerRunway(runway: Runway): void {
    if (!this.runways.has(runway.id)) {
      this.runways.set(runway.id, runway);
    } else {
      console.warn(`Runway ${runway.id} is already registered.`);
    }
  }

  public requestToLand(aircraft: Aircraft): boolean {
    console.log(
      `Command Centre processing landing request for ${aircraft.name}...`
    );
    const freeRunway = this.findFreeRunway();

    if (freeRunway) {
      console.log(`Runway ${freeRunway.id} is available.`);
      freeRunway.occupy(aircraft);
      this.aircraftLocations.set(aircraft, freeRunway);
      aircraft.receiveNotification(
        `You are cleared to land on Runway ${freeRunway.id}.`
      );
      aircraft.confirmLanding();
      return true;
    } else {
      console.log(`No free runways available for ${aircraft.name}.`);
      aircraft.receiveNotification(
        "Landing denied: No free runways available. Please hold."
      );
      return false;
    }
  }

  public requestToTakeOff(aircraft: Aircraft): boolean {
    console.log(
      `Command Centre processing takeoff request for ${aircraft.name}...`
    );
    const runway = this.findRunwayForAircraft(aircraft);

    if (runway) {
      console.log(
        `Aircraft ${aircraft.name} is on Runway ${runway.id}. Clearing for takeoff.`
      );
      aircraft.receiveNotification(
        `You are cleared for takeoff from Runway ${runway.id}.`
      );
      runway.release();
      this.aircraftLocations.delete(aircraft);
      aircraft.confirmTakeOff();
      return true;
    } else {
      console.log(
        `Aircraft ${aircraft.name} not found on any runway. Cannot process takeoff.`
      );
      aircraft.receiveNotification(
        "Takeoff denied: Aircraft not assigned to a runway."
      );
      return false;
    }
  }

  public notifyRunwayFree(runway: Runway): void {
    console.log(`Command Centre notified: Runway ${runway.id} is now FREE.`);
  }

  public notifyRunwayBusy(runway: Runway): void {
    console.log(
      `Command Centre notified: Runway ${runway.id} is now BUSY with ${runway.isBusyWithAircraft?.name}.`
    );
  }

  private findFreeRunway(): Runway | null {
    for (const runway of this.runways.values()) {
      if (!runway.isBusyWithAircraft) {
        return runway;
      }
    }
    return null;
  }

  public findRunwayForAircraft(aircraft: Aircraft): Runway | null {
    return this.aircraftLocations.get(aircraft) || null;
  }
}
