import { Hero } from "./Hero";

export class Warrior implements Hero {
  public getAttack(): number {
    return 10;
  }

  public getDefense(): number {
    return 5;
  }

  public getDescription(): string {
    return "Warrior";
  }
}
