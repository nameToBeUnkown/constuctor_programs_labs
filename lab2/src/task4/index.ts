import { Virus } from "./virus";

export function demonstrateVirusPrototype() {
  console.log("=== Demonstrating Virus Prototype Pattern ===\n");

  const alpha = new Virus(0.5, 10, "Alpha", "Coronavirus");

  const beta = new Virus(0.3, 5, "Beta", "Coronavirus");
  const gamma = new Virus(0.4, 5, "Gamma", "Coronavirus");
  alpha.addChild(beta);
  alpha.addChild(gamma);

  const delta = new Virus(0.2, 2, "Delta", "Coronavirus");
  const epsilon = new Virus(0.25, 2, "Epsilon", "Coronavirus");
  beta.addChild(delta);
  gamma.addChild(epsilon);

  console.log("Original Virus Family Tree:");
  console.log(alpha.displayFamilyTree());

  console.log("\nCloning entire virus family tree...\n");
  const clonedAlpha = alpha.clone();

  console.log("Cloned Virus Family Tree:");
  console.log(clonedAlpha.displayFamilyTree());

  const newVariant = new Virus(0.15, 1, "New Variant", "Coronavirus");
  clonedAlpha.addChild(newVariant);

  console.log("\nOriginalk family tree after modifying clone:");
  console.log(alpha.displayFamilyTree());

  console.log("\nModified clone family tree:");
  console.log(clonedAlpha.displayFamilyTree());
}
