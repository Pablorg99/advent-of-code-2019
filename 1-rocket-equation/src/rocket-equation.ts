export class Rocket {
  public getFuelForModuleWithMass(mass: number): number {
    let fuel: number;
    fuel = Math.floor(mass / 3);
    fuel -= 2;
    if (fuel <= 0) {
      return 0;
    }
    return fuel + this.getFuelForModuleWithMass(fuel);
  }

  public addFuelFromModulesWithMass(massArray: number[]): number {
    let fuelAddition: number = 0;
    for (let mass = 0; mass < massArray.length; mass++) {
      fuelAddition += this.getFuelForModuleWithMass(massArray[mass]);
    }
    return fuelAddition;
  }
}
