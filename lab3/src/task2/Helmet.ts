import { InventoryDecorator } from "./InventoryDecorator";
import { Hero } from "./Hero";

export class Helmet extends InventoryDecorator {
  constructor(hero: Hero) {
    super(hero);
  }

  public getDefense(): number {
    return super.getDefense() + 2;
  }

  public getDescription(): string {
    return `${super.getDescription()}, wearing Helmet`;
  }
}
