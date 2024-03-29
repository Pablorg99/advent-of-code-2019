import { Wire } from './coordinates';

export class Path {
  public value: Wire[] = [];
  public currentPosition: Wire = new Wire(0, 0);

  public wireInstruction(stringInstruction: string): void {
    let instructionType: string = stringInstruction.substring(0, 1);
    let positionsToMove: number = parseInt(stringInstruction.substring(1));
    switch (instructionType) {
      case 'U':
        this.wireUp(positionsToMove);
        break;

      case 'R':
        this.wireRight(positionsToMove);
        break;

      case 'L':
        this.wireLeft(positionsToMove);
        break;

      case 'D':
        this.wireDown(positionsToMove);
        break;

      default:
        throw new Error('Unrecognised instruction');
    }
  }

  private wireUp(positionsToMove: number): void {
    let movements: number = 0;
    while (movements < positionsToMove) {
      this.value.push(
        new Wire(this.currentPosition.x, this.currentPosition.y + 1),
      );
      this.updateCurrentPosition();
      movements++;
    }
  }

  private wireRight(positionsToMove: number): void {
    let movements: number = 0;
    while (movements < positionsToMove) {
      this.value.push(
        new Wire(this.currentPosition.x + 1, this.currentPosition.y),
      );
      this.updateCurrentPosition();
      movements++;
    }
  }

  private wireLeft(positionsToMove: number): void {
    let movements: number = 0;
    while (movements < positionsToMove) {
      this.value.push(
        new Wire(this.currentPosition.x - 1, this.currentPosition.y),
      );
      this.updateCurrentPosition();
      movements++;
    }
  }

  private wireDown(positionsToMove: number): void {
    let movements: number = 0;
    while (movements < positionsToMove) {
      this.value.push(
        new Wire(this.currentPosition.x, this.currentPosition.y - 1),
      );
      this.updateCurrentPosition();
      movements++;
    }
  }

  private updateCurrentPosition(): void {
    this.currentPosition = this.value[this.value.length - 1];
  }
}
