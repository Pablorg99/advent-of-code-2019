import { Grid, Coordinates, Wire } from '../src/grid';

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
    ];

    grid.wirePath('U3,L1');

    expect(grid.path).toEqual(expectedPath);
  });

  it('can wire up, right, left and down', () => {
    const grid = new Grid(new Coordinates(0, 0));
    const expectedPath: Wire[] = [
      new Wire(0, 1),
      new Wire(1, 1),
      new Wire(1, -1),
      new Wire(0, -1),
    ];

    grid.wirePath('U1,R1,D2,L1');

    expect(grid.path).toEqual(expectedPath);
  });
});
