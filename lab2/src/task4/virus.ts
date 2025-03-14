interface Cloneable {
  clone(): Virus;
}

export class Virus implements Cloneable {
  private children: Virus[] = [];

  constructor(
    private weight: number,
    private age: number,
    private name: string,
    private species: string
  ) {}

  addChild(child: Virus): void {
    this.children.push(child);
  }

  getChildren(): Virus[] {
    return this.children;
  }

  getDetails(): string {
    return `${this.name} (${this.species}) - Age: ${this.age}, Weight: ${this.weight}`;
  }

  clone(): Virus {
    const clonedVirus = new Virus(
      this.weight,
      this.age,
      `${this.name}_clone`,
      this.species
    );

    this.children.forEach((child) => {
      clonedVirus.addChild(child.clone());
    });

    return clonedVirus;
  }

  displayFamilyTree(indent: string = ""): string {
    let result = `${indent}${this.getDetails()}\n`;
    this.children.forEach((child) => {
      result += child.displayFamilyTree(indent + "  ");
    });
    return result;
  }

  getName(): string {
    return this.name;
  }

  getSpecies(): string {
    return this.species;
  }

  getAge(): number {
    return this.age;
  }

  getWeight(): number {
    return this.weight;
  }
}
