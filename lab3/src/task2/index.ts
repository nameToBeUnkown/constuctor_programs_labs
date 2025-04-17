console.log("\n=============================================");
console.log("--- Task 2 ---");
console.log("=============================================\n");

import { Hero } from "./Hero";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Paladin } from "./Paladin";
import { Sword } from "./Sword";
import { Shield } from "./Shield";
import { Helmet } from "./Helmet";
import { MagicRing } from "./MagicRing";

const displayHeroInfo = (hero: Hero) => {
  console.log(`Description: ${hero.getDescription()}`);
  console.log(`Attack: ${hero.getAttack()}`);
  console.log(`Defense: ${hero.getDefense()}`);
  console.log("---");
};

let warrior: Hero = new Warrior();
let mage: Hero = new Mage();
let paladin: Hero = new Paladin();

console.log("Base Warrior:");
displayHeroInfo(warrior);

console.log("Base Mage:");
displayHeroInfo(mage);

console.log("Base Paladin:");
displayHeroInfo(paladin);

console.log("Warrior equipped with Sword and Shield:");
warrior = new Sword(warrior);
warrior = new Shield(warrior);
displayHeroInfo(warrior);

console.log("Mage equipped with Magic Ring and Helmet:");
mage = new MagicRing(mage);
mage = new Helmet(mage);
displayHeroInfo(mage);

console.log("Paladin equipped with Sword, Shield, Helmet, and Magic Ring:");
paladin = new Sword(paladin);
paladin = new Shield(paladin);
paladin = new Helmet(paladin);
paladin = new MagicRing(paladin);
displayHeroInfo(paladin);

console.log("\n--- End of Task 2 Demonstration ---");
