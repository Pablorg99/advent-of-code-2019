export class Coordinates {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public equals(coordiantes: Coordinates): boolean {
    if (this.x == coordiantes.x && this.y == coordiantes.y) {
      return true;
    }
    return false;
  }

  public manhattanDistanceFrom(origin: Coordinates): number {
    return Math.abs(this.x - origin.x) + Math.abs(this.y - origin.y);
  }
}

export class Wire extends Coordinates {}

export class CrossedWire extends Coordinates {}
