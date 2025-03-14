export class Character {
  private height: number = 0;
  private build: string = "";
  private hairColor: string = "";
  private eyeColor: string = "";

  private weapon: string = "";
  private armor: string = "";
  private accessories: string[] = [];

  private alignment: "good" | "evil" = "good";
  private specialAbilities: string[] = [];
  private deeds: string[] = [];

  display(): void {
    console.log("\nCharater Details:");
    console.log("----------------");
    console.log(`Physical Attributes:`);
    console.log(`- Height: ${this.height}cm`);
    console.log(`- Build: ${this.build}`);
    console.log(`- Hair Color: ${this.hairColor}`);
    console.log(`- Eye Color: ${this.eyeColor}`);

    console.log(`\nEquipment:`);
    console.log(`- Weapon: ${this.weapon}`);
    console.log(`- Armor: ${this.armor}`);
    console.log(`- Accessories: ${this.accessories.join(", ")}`);

    console.log(`\nCharacter Information:`);
    console.log(`- Alignment: ${this.alignment}`);
    console.log(`- Special Abilities: ${this.specialAbilities.join(", ")}`);
    console.log(
      `- Notable ${this.alignment === "good" ? "Heroic" : "Evil"} Deeds:`
    );
    this.deeds.forEach((deed) => console.log(`  * ${deed}`));
  }

  setHeight(height: number): Character {
    this.height = height;
    return this;
  }

  setBuild(build: string): Character {
    this.build = build;
    return this;
  }

  setHairColor(color: string): Character {
    this.hairColor = color;
    return this;
  }

  setEyeColor(color: string): Character {
    this.eyeColor = color;
    return this;
  }

  setWeapon(weapon: string): Character {
    this.weapon = weapon;
    return this;
  }

  setArmor(armor: string): Character {
    this.armor = armor;
    return this;
  }

  addAccessory(accessory: string): Character {
    this.accessories.push(accessory);
    return this;
  }

  setAlignment(alignment: "good" | "evil"): Character {
    this.alignment = alignment;
    return this;
  }

  addSpecialAbility(ability: string): Character {
    this.specialAbilities.push(ability);
    return this;
  }

  addDeed(deed: string): Character {
    this.deeds.push(deed);
    return this;
  }
}
