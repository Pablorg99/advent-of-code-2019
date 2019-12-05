import { IntCode } from '../src/int-code';

describe('IntCode', () => {
  it('add values from positions indicated in 2nd and 3rd element, when 1st element is 1', () => {
    const input: number[] = [1, 0, 0, 0, 99];
    const intcode = new IntCode(input);
    const expectedOutput: number[] = [2, 0, 0, 0, 99];

    expect(intcode.getOutput()).toEqual(expectedOutput);
  });

  it('multiply values from positions indicated in 2nd and 3rd element, when 1st element is 2', () => {
    const input: number[] = [2, 3, 0, 3, 99];
    const intcode = new IntCode(input);
    const expectedOutput: number[] = [2, 3, 0, 6, 99];

    expect(intcode.getOutput()).toEqual(expectedOutput);
  });

  it('covers the cases from above with larger inputs', () => {
    const firstInput: number[] = [2, 4, 4, 5, 99, 0];
    const firstIntCode = new IntCode(firstInput);
    const firstExpectedOutput: number[] = [2, 4, 4, 5, 99, 9801];

    expect(firstIntCode.getOutput()).toEqual(firstExpectedOutput);

    const secondInput: number[] = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    const secondIntCode = new IntCode(secondInput);
    const secondExpectedOutput: number[] = [30, 1, 1, 4, 2, 5, 6, 0, 99];

    expect(secondIntCode.getOutput()).toEqual(secondExpectedOutput);
  });

  it('anwers the question', () => {
    const input: number[] = [
      1,
      12,
      2,
      3,
      1,
      1,
      2,
      3,
      1,
      3,
      4,
      3,
      1,
      5,
      0,
      3,
      2,
      13,
      1,
      19,
      1,
      5,
      19,
      23,
      2,
      10,
      23,
      27,
      1,
      27,
      5,
      31,
      2,
      9,
      31,
      35,
      1,
      35,
      5,
      39,
      2,
      6,
      39,
      43,
      1,
      43,
      5,
      47,
      2,
      47,
      10,
      51,
      2,
      51,
      6,
      55,
      1,
      5,
      55,
      59,
      2,
      10,
      59,
      63,
      1,
      63,
      6,
      67,
      2,
      67,
      6,
      71,
      1,
      71,
      5,
      75,
      1,
      13,
      75,
      79,
      1,
      6,
      79,
      83,
      2,
      83,
      13,
      87,
      1,
      87,
      6,
      91,
      1,
      10,
      91,
      95,
      1,
      95,
      9,
      99,
      2,
      99,
      13,
      103,
      1,
      103,
      6,
      107,
      2,
      107,
      6,
      111,
      1,
      111,
      2,
      115,
      1,
      115,
      13,
      0,
      99,
      2,
      0,
      14,
      0,
    ];
    const intcode = new IntCode(input);

    console.log(intcode.getOutput());
  });
});
