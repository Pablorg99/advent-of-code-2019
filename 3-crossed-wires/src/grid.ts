import { createWriteStream } from 'fs';

export class Coordinates {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Wire extends Coordinates {}

export class CrossedWire extends Coordinates {}

export class Grid {
  path: Coordinates[] = [];
  startingPoint: Coordinates;
  currentPoint: Coordinates;
  crossedWires: CrossedWire[] = [];

  constructor(startingPoint?: Coordinates) {
    this.startingPoint = startingPoint;
    this.currentPoint = startingPoint;
  }

  public getDistanceToCloserCross(): number {
    this.getCrossedWires();
    return this.distanceToClosestCross();
  }

  private getCrossedWires(): void {
    for (let index = 0; index < this.path.length; index++) {
      if (this.path[index] instanceof CrossedWire) {
        this.crossedWires.push(this.path[index]);
      }
    }
  }

  private distanceToClosestCross(): number {
    let lowerDistance: number = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < this.crossedWires.length; index++) {
      if (
        this.manhattanDistanceFromStartingPoint(this.crossedWires[index]) <
        lowerDistance
      ) {
        lowerDistance = this.manhattanDistanceFromStartingPoint(
          createWriteStream[index],
        );
      }
    }
    return lowerDistance;
  }

  private manhattanDistanceFromStartingPoint(crossedWire: CrossedWire): number {
    return (
      Math.abs(this.startingPoint.x - crossedWire.x) +
      Math.abs(this.startingPoint.y - crossedWire.y)
    );
  }

  public wirePath(stringOfInstructions: string): void {
    let arrayOfInstructions: string[] = stringOfInstructions.split(',');
    arrayOfInstructions.forEach(this.wireInstruction this);
  }

  private wireInstruction(stringInstruction: string): void {
    let arrayInstruction: string[] = stringInstruction.split('');
    switch (arrayInstruction[0]) {
      case 'U':
        this.wireUp(parseInt(arrayInstruction[1]));
        break;

      case 'R':
        this.wireRight(parseInt(arrayInstruction[1]));
        break;

      case 'L':
        this.wireLeft(parseInt(arrayInstruction[1]));
        break;

      case 'D':
        this.wireDown(parseInt(arrayInstruction[1]));
        break;

      default:
        throw new Error('Unrecognised instruction');
    }
  }

  private wireUp(positionsToMove: number): void {
    let movements: number = 0;
    while (movements < positionsToMove) {
      this.wirePosition(this.currentPoint.x, this.currentPoint.y + 1);
      this.updateCurrentPoint();
      movements++;
    }
  }

  private wireRight(positionsToMove: number): void {
    let movements: number = 0;
    while (movements < positionsToMove) {
      this.wirePosition(this.currentPoint.x + 1, this.currentPoint.y);
      this.updateCurrentPoint();
      movements++;
    }
  }

  private wireLeft(positionsToMove: number): void {
    let movements: number = 0;
    while (movements < positionsToMove) {
      this.wirePosition(this.currentPoint.x - 1, this.currentPoint.y);
      this.updateCurrentPoint();
      movements++;
    }
  }

  private wireDown(positionsToMove: number): void {
    let movements: number = 0;
    while (movements < positionsToMove) {
      this.wirePosition(this.currentPoint.x, this.currentPoint.y - 1);
      this.updateCurrentPoint();
      movements++;
    }
  }

  private wirePosition(x: number, y: any): void {
    let wire = new Wire(x, y);
    if (this.pathContains(wire)) {
      this.path.push(new CrossedWire(x, y));
    } else {
      this.path.push(wire);
    }
  }

  private pathContains(wire: Wire): boolean {
    for (let index = 0; index < this.path.length; index++) {
      if (this.areEqual(wire, this.path[index])) {
        return true;
      }
    }
    return false;
  }

  private areEqual(newWire: Wire, arrayWire: Wire): boolean {
    if (newWire.x == arrayWire.x && newWire.y == arrayWire.y) {
      return true;
    }
    return false;
  }

  private updateCurrentPoint(): void {
    this.currentPoint = this.path[this.path.length - 1];
  }
}
