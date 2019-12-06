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
  path: any[] = [];
  startingPoint: Coordinates;
  currentPoint: any;

  constructor(startingPoint?: Coordinates) {
    this.startingPoint = startingPoint;
    this.currentPoint = startingPoint;
  }

  public wirePath(stringOfInstructions: string): void {
    let arrayOfInstructions: string[] = stringOfInstructions.split(',');
    arrayOfInstructions.forEach(this.wireInstruction, this);
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
        break;
    }
    this.updateCurrentPoint();
  }

  private wireUp(positionsToMove: number): void {
    for (let y = this.currentPoint.y + 1; y <= positionsToMove; y++) {
      this.path.push(new Wire(this.currentPoint.x, y));
    }
  }

  private wireRight(positionsToMove: number): void {
    for (let x = this.currentPoint.x + 1; x <= positionsToMove; x++) {
      this.path.push(new Wire(x, this.currentPoint.y));
    }
  }

  private wireLeft(positionsToMove: number): void {
    for (let x = this.currentPoint.x - 1; Math.abs(x) <= positionsToMove; x--) {
      this.path.push(new Wire(x, this.currentPoint.y));
    }
  }

  private wireDown(positionsToMove: number): void {
    for (let y = this.currentPoint.y - 1; Math.abs(y) <= positionsToMove; y--) {
      this.path.push(new Wire(this.currentPoint.x, y));
    }
  }

  private updateCurrentPoint(): void {
    this.currentPoint = this.path[this.path.length - 1];
  }
}
