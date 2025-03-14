import { Character } from "./character";

export interface CharacterBuilder {
  reset(): this;
  setPhysicalAttributes(): this;
  setEquipment(): this;
  setSpecialAbilities(): this;
  addDeeds(): this;
  getResult(): Character;
}

export class HeroBuilder implements CharacterBuilder {
  private character: Character = new Character();

  reset(): this {
    this.character = new Character();
    return this;
  }

  setPhysicalAttributes(): this {
    this.character
      .setHeight(185)
      .setBuild("Athletic")
      .setHairColor("Golden")
      .setEyeColor("Sky Blue");
    return this;
  }

  setEquipment(): this {
    this.character
      .setWeapon("Excalibur")
      .setArmor("Sacred Plate Mail")
      .addAccessory("Holy Amulet")
      .addAccessory("Ring of Protection");
    return this;
  }

  setSpecialAbilities(): this {
    this.character
      .setAlignment("good")
      .addSpecialAbility("Divine Shield")
      .addSpecialAbility("Holy Light")
      .addSpecialAbility("Healing Touch");
    return this;
  }

  addDeeds(): this {
    this.character
      .addDeed("Saved a village from dragon attack")
      .addDeed("Protected innocent civilians during the war")
      .addDeed("Founded an orphanage for war victims");
    return this;
  }

  getResult(): Character {
    return this.character;
  }
}

export class EnemyBuilder implements CharacterBuilder {
  private character: Character = new Character();

  reset(): this {
    this.character = new Character();
    return this;
  }

  setPhysicalAttributes(): this {
    this.character
      .setHeight(200)
      .setBuild("Imposing")
      .setHairColor("Pitch Black")
      .setEyeColor("Blood Red");
    return this;
  }

  setEquipment(): this {
    this.character
      .setWeapon("Soul Reaver")
      .setArmor("Dark Obsidian Plate")
      .addAccessory("Crown of Dominion")
      .addAccessory("Cloak of Shadows");
    return this;
  }

  setSpecialAbilities(): this {
    this.character
      .setAlignment("evil")
      .addSpecialAbility("Dark Magic")
      .addSpecialAbility("Soul Drain")
      .addSpecialAbility("Shadow Form");
    return this;
  }

  addDeeds(): this {
    this.character
      .addDeed("Conquered three kingdoms")
      .addDeed("Corrupted the sacred temple")
      .addDeed("Unleashed an ancient evil upon the world");
    return this;
  }

  getResult(): Character {
    return this.character;
  }
}

export class CharacterDirector {
  private builder: CharacterBuilder;

  constructor(builder: CharacterBuilder) {
    this.builder = builder;
  }

  setBuilder(builder: CharacterBuilder): void {
    this.builder = builder;
  }

  createCompleteCharacter(): Character {
    return this.builder
      .reset()
      .setPhysicalAttributes()
      .setEquipment()
      .setSpecialAbilities()
      .addDeeds()
      .getResult();
  }
}
