export class Password {
  public hasTwoAdjacentNumbers(password: number): boolean {
    let stringPassword: string = password.toString();
    let stringDigits: string[] = stringPassword.split('');
    for (let digit = 0; digit < stringDigits.length - 1; digit++) {
      if (stringDigits[digit] == stringDigits[digit + 1]) {
        return true;
      }
    }
    return false;
  }

  public neverDecrease(password: number): boolean {
    let stringPassword: string = password.toString();
    let stringDigits: string[] = stringPassword.split('');
    let digitsArray: number[] = stringDigits.map(digit => parseInt(digit));
    for (let digit = 0; digit < digitsArray.length - 1; digit++) {
      if (stringDigits[digit + 1] < stringDigits[digit]) {
        return false;
      }
    }
    return true;
  }

  public possiblePasswordsIn(initialRange: number, finalRange: number) {
    let possiblePasswords: number = 0;
    for (let password = initialRange; password <= finalRange; password++) {
      if (
        this.hasTwoAdjacentNumbers(password) &&
        this.neverDecrease(password)
      ) {
        possiblePasswords++;
      }
    }
    return possiblePasswords;
  }
}
