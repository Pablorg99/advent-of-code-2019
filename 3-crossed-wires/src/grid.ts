import { Coordinates, CrossedWire } from './coordinates';
import { Path } from './path';

export class Grid {
  public firstPath: Path = new Path();
  public secondPath: Path = new Path();
  public crossedWires: CrossedWire[] = [];
  public manhattanDistanceToClosestCross: number = Number.MAX_SAFE_INTEGER;

  public wirePaths(
    firstPathInstructions: string,
    secondPathInstructions: string,
  ): void {
    this.wireFirstPath(firstPathInstructions);
    this.wireSecondPath(secondPathInstructions);
    this.updateCrossedWires();
    this.updateManhattanDistanceToClosestCross();
  }

  private wireFirstPath(pathInstructions: string) {
    let arrayOfInstructions: string[] = pathInstructions.split(',');
    arrayOfInstructions.forEach(this.firstPath.wireInstruction, this.firstPath);
  }

  private wireSecondPath(pathInstructions: string) {
    let arrayOfInstructions: string[] = pathInstructions.split(',');
    arrayOfInstructions.forEach(
      this.secondPath.wireInstruction,
      this.secondPath,
    );
  }

  private updateCrossedWires(): void {
    for (
      let firstPathWireIndex = 0;
      firstPathWireIndex < this.firstPath.value.length;
      firstPathWireIndex++
    ) {
      for (
        let secondPathWireIndex = 0;
        secondPathWireIndex < this.secondPath.value.length;
        secondPathWireIndex++
      ) {
        if (
          this.firstPath.value[firstPathWireIndex].equals(
            this.secondPath.value[secondPathWireIndex],
          ) &&
          !this.firstPath.value[firstPathWireIndex].equals(
            new Coordinates(0, 0),
          )
        ) {
          this.crossedWires.push(
            new CrossedWire(
              this.firstPath.value[firstPathWireIndex].x,
              this.firstPath.value[firstPathWireIndex].y,
            ),
          );
        }
      }
    }
  }

  private updateManhattanDistanceToClosestCross() {
    for (let index = 0; index < this.crossedWires.length; index++) {
      if (
        this.crossedWires[index].manhattanDistanceFrom(new Coordinates(0, 0)) <
        this.manhattanDistanceToClosestCross
      ) {
        this.manhattanDistanceToClosestCross = this.crossedWires[
          index
        ].manhattanDistanceFrom(new Coordinates(0, 0));
      }
    }
  }
}
