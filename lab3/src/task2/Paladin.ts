import { Hero } from "./Hero";

export class Paladin implements Hero {
  public getAttack(): number {
    return 8;
  }

  public getDefense(): number {
    return 8;
  }

  public getDescription(): string {
    return "Paladin";
  }
}
