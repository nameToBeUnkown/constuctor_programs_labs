import { InventoryDecorator } from "./InventoryDecorator";
import { Hero } from "./Hero";

export class Shield extends InventoryDecorator {
  constructor(hero: Hero) {
    super(hero);
  }

  public getDefense(): number {
    return super.getDefense() + 3;
  }

  public getDescription(): string {
    return `${super.getDescription()}, equipped with Shield`;
  }
}
