import { Grid, Coordinates, Wire, CrossedWire } from '../src/grid';

describe('Grid', () => {
  it('it has 0 wires on its path', () => {
    const grid = new Grid();

    expect(grid.path).toStrictEqual([]);
  });

  it('has an starting point', () => {
    const startingPoint = new Coordinates(0, 0);
    const grid = new Grid(startingPoint);

    expect(grid.startingPoint).toBe(startingPoint);
  });

  it('fills path with new positions depending of the instruction', () => {
    const grid = new Grid(new Coordinates(0, 0));
    const expectedPath: Wire[] = [
      new Wire(0, 1),
      new Wire(0, 2),
      new Wire(0, 3),
    ];

    grid.wirePath('U3');

    expect(grid.path).toStrictEqual(expectedPath);
  });

  it('fills path with more than one instruction, the second one begins in the final place of the first one', () => {
    const grid = new Grid(new Coordinates(0, 0));
    const expectedPath: Wire[] = [
      new Wire(0, 1),
      new Wire(0, 2),
      new Wire(0, 3),
      new Wire(-1, 3),
      new Wire(-2, 3),
    ];

    grid.wirePath('U3,L2');

    expect(grid.path).toStrictEqual(expectedPath);
  });

  it('can wire up, right, left and down', () => {
    const grid = new Grid(new Coordinates(0, 0));
    const expectedPath: Wire[] = [
      new Wire(0, 1),
      new Wire(1, 1),
      new Wire(1, 0),
      new Wire(1, -1),
      new Wire(0, -1),
    ];

    grid.wirePath('U1,R1,D2,L1');

    expect(grid.path).toStrictEqual(expectedPath);
  });

  it('puts a cross when a it is wiring an already wired position', () => {
    const grid = new Grid(new Coordinates(0, 0));
    const expectedPath: Wire[] = [
      new Wire(0, 1),
      new Wire(0, 2),
      new Wire(1, 2),
      new Wire(1, 1),
      new CrossedWire(0, 1),
      new Wire(-1, 1),
    ];

    grid.wirePath('U2,R1,D1,L2');

    expect(grid.path).toStrictEqual(expectedPath);
  });

  it('gets the manhattan distance of the closer crossed wire', () => {
    const grid = new Grid(new Coordinates(0, 0));

    grid.wirePath('U2,R1,D1,L2');

    expect(grid.getDistanceToCloserCross()).toBe(1);
  });

  it('gets the manhattan distance of the closer crossed wire', () => {
    const grid = new Grid(new Coordinates(0, 0));

    grid.wirePath(
      'R75,D30,R83,U83,L12,D49,R71,U7,L72,U62,R66,U55,R34,D71,R55,D58,R83',
    );

    expect(grid.getDistanceToCloserCross()).toBe(159);
  });
});
