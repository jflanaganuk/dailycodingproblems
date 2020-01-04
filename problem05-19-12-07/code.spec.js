const { cons, car, cdr } = require('./code');

test("should pass the challenge", () => {
    expect(car(cons(3, 4))).toBe(3);
    expect(cdr(cons(3, 4))).toBe(4);
});