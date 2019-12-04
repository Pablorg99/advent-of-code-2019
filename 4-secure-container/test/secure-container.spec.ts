import Password from '../src/secure-container';

describe('Password', () => {
  const password = new Password();

  it('has 2 adjacent numbers', () => {
    expect(password.hasTwoAdjacentNumbers(123456)).toBeFalsy();
    expect(password.hasTwoAdjacentNumbers(123455)).toBeTruthy();
    expect(password.hasTwoAdjacentNumbers(112233)).toBeTruthy();
    expect(password.hasTwoAdjacentNumbers(123444)).toBeFalsy();
    expect(password.hasTwoAdjacentNumbers(111122)).toBeTruthy();
  });

  it('has digits that never decrease, going from left to right', () => {
    expect(password.neverDecrease(123456)).toBeTruthy();
    expect(password.neverDecrease(123455)).toBeTruthy();
    expect(password.neverDecrease(123436)).toBeFalsy();
  });

  it('counts how many password in an inclusive range meet these criteria', () => {
    expect(password.possiblePasswordsIn(10, 20)).toBe(1);
    expect(password.possiblePasswordsIn(121, 133)).toBe(2);
  });

  it('answers the question', () => {
    console.log(password.possiblePasswordsIn(183564, 657474));
  });
});
