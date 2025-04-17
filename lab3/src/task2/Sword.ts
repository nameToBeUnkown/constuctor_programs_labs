import { InventoryDecorator } from "./InventoryDecorator";
import { Hero } from "./Hero";

export class Sword extends InventoryDecorator {
  constructor(hero: Hero) {
    super(hero);
  }

  public getAttack(): number {
    return super.getAttack() + 5;
  }

  public getDescription(): string {
    return `${super.getDescription()}, equipped with Sword`;
  }
}
