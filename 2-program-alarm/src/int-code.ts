export class IntCode {
  private _input: number[];
  private _output: number[];
  private _currentOperationCode: number;
  private _currentOperationCodeIndex: number;
  private _expectedOuput: number;

  constructor(input: number[]) {
    this._input = input;
    this._output = input;
    this._currentOperationCode = input[0];
    this._currentOperationCodeIndex = 0;
  }

  public getOutput(): number[] {
    this.iterateThroughOperationCodes();
    return this._output;
  }

  getNounAndVerbFor(expectedOutput: number): number {
    this._expectedOuput = expectedOutput;
    this.tryInputs();
    return 100 * this._output[1] + this._output[2];
  }

  private tryInputs(): void {
    for (let noun = 0; noun <= 99; noun++) {
      for (let verb = 0; verb <= 99; verb++) {
        this.restoreValues();
        this._output[1] = noun;
        this._output[2] = verb;
        this.iterateThroughOperationCodes();
        if (this._output[0] == this._expectedOuput) {
          return;
        }
      }
    }
  }

  private restoreValues(): void {
    this._output = [...this._input];
    this._currentOperationCodeIndex = 0;
  }

  private iterateThroughOperationCodes(): void {
    do {
      this.updateOperationCode();
      this.applyOperation();
      this._currentOperationCodeIndex += 4;
    } while (this.programShouldContinue());
  }

  private updateOperationCode(): void {
    this._currentOperationCode = this._output[this._currentOperationCodeIndex];
  }

  private programShouldContinue(): boolean {
    if (this._currentOperationCode === 1 || this._currentOperationCode === 2) {
      return true;
    }
    return false;
  }

  private applyOperation(): void {
    switch (this._currentOperationCode) {
      case 1:
        this.addition();
        break;

      case 2:
        this.multiplication();
        break;
    }
  }

  private addition(): void {
    let firstArgumentIndex: number = this._output[
      this._currentOperationCodeIndex + 1
    ];
    let secondArgumentIndex: number = this._output[
      this._currentOperationCodeIndex + 2
    ];
    let storePositionIndex: number = this._output[
      this._currentOperationCodeIndex + 3
    ];
    this._output[storePositionIndex] =
      this._output[firstArgumentIndex] + this._output[secondArgumentIndex];
  }

  private multiplication(): void {
    let firstArgumentIndex: number = this._output[
      this._currentOperationCodeIndex + 1
    ];
    let secondArgumentIndex: number = this._output[
      this._currentOperationCodeIndex + 2
    ];
    let storePositionIndex: number = this._output[
      this._currentOperationCodeIndex + 3
    ];
    this._output[storePositionIndex] =
      this._output[firstArgumentIndex] * this._output[secondArgumentIndex];
  }
}
