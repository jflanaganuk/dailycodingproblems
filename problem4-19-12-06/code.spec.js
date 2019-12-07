const findMissingPositiveInt = require('./code');

test("should pass the challenge", () => {
    const inputs = [
        [[3, 4, -1, 1], 2],
        [[1, 2, 0], 3],
        [[-4, -5, 1, 3, 2, 4], 5],
    ];
    inputs.forEach(([input, output]) => {
        expect(findMissingPositiveInt(input)).toBe(output);
    });
});