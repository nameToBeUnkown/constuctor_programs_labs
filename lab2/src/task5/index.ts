import { HeroBuilder, EnemyBuilder, CharacterDirector } from "./builders";

export function demonstrateCharacterBuilder() {
  console.log("=== Demonstrating Character Builder Pattern ===");

  const heroBuilder = new HeroBuilder();
  const enemyBuilder = new EnemyBuilder();

  const director = new CharacterDirector(heroBuilder);

  console.log("\nCreating a Hero character...");
  const hero = director.createCompleteCharacter();
  hero.display();

  director.setBuilder(enemyBuilder);

  console.log("\nCreating an Enemy character...");
  const enemy = director.createCompleteCharacter();
  enemy.display();

  console.log("\nCreating a custom hero using fluent interface...");
  const customHero = new HeroBuilder()
    .reset()
    .setPhysicalAttributes()
    .getResult()
    .setWeapon("Mythril Sword")
    .setArmor("Dragon Scale Mail")
    .addAccessory("Phoenix Feather")
    .addSpecialAbility("Dragon's Breath")
    .addDeed("Defeated the ancient dragon king");

  customHero.display();
}
