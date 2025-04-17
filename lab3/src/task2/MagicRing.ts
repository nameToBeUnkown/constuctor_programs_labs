import { InventoryDecorator } from "./InventoryDecorator";
import { Hero } from "./Hero";

export class MagicRing extends InventoryDecorator {
  constructor(hero: Hero) {
    super(hero);
  }

  public getAttack(): number {
    return super.getAttack() + 1;
  }

  public getDefense(): number {
    return super.getDefense() + 1;
  }

  public getDescription(): string {
    return `${super.getDescription()}, wearing Magic Ring`;
  }
}
