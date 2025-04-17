import { Hero } from "./Hero";

export abstract class InventoryDecorator implements Hero {
  protected decoratedHero: Hero;

  constructor(hero: Hero) {
    this.decoratedHero = hero;
  }

  public getAttack(): number {
    return this.decoratedHero.getAttack();
  }

  public getDefense(): number {
    return this.decoratedHero.getDefense();
  }

  public getDescription(): string {
    return this.decoratedHero.getDescription();
  }
}
