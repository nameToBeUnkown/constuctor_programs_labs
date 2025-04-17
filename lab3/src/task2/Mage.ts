import { Hero } from "./Hero";

export class Mage implements Hero {
  public getAttack(): number {
    return 5;
  }

  public getDefense(): number {
    return 3;
  }

  public getDescription(): string {
    return "Mage";
  }
}
