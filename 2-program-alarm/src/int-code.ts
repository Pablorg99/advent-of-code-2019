export class IntCode {
  private _input: number[];
  private _output: number[];
  private _operationCode: number;

  constructor(input: number[]) {
    this._input = input;
    this._output = input;
  }

  public getOutput(): number[] {
    this.iterateThroughOperationCodes();
    return this._output;
  }

  private iterateThroughOperationCodes(): void {
    let operationCodeIndex: number = 0;
    while (operationCodeIndex < this._input.length) {
      this._operationCode = this._input[operationCodeIndex];
      this.handleOperationCode(operationCodeIndex);
      operationCodeIndex += 4;
    }
  }

  private handleOperationCode(operationCodeIndex: number): any {
    switch (this._operationCode) {
      case 1:
        this.addition(operationCodeIndex);
        break;

      case 2:
        this.multiplication(operationCodeIndex);
        break;

      case 99:
        return this._output;

      default:
        return this._output;
    }
  }

  private addition(operationCodeIndex: number): void {
    let firstArgumentIndex: number = this._input[operationCodeIndex + 1];
    let secondArgumentIndex: number = this._input[operationCodeIndex + 2];
    let storePositionIndex: number = this._input[operationCodeIndex + 3];
    this._output[storePositionIndex] =
      this._input[firstArgumentIndex] + this._input[secondArgumentIndex];
  }

  multiplication(operationCodeIndex: number) {
    let firstArgumentIndex: number = this._input[operationCodeIndex + 1];
    let secondArgumentIndex: number = this._input[operationCodeIndex + 2];
    let storePositionIndex: number = this._input[operationCodeIndex + 3];
    this._output[storePositionIndex] =
      this._input[firstArgumentIndex] * this._input[secondArgumentIndex];
  }
}
