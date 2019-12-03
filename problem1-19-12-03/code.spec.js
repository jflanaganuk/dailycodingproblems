const twoNumbersAddTogetherInList = require("./code");

test("should pass the challenge", () => {
    expect(twoNumbersAddTogetherInList([10, 15, 3, 7], 17)).toBe(true);
    expect(twoNumbersAddTogetherInList([10, 15, 3, 7], 18)).toBe(true);
    expect(twoNumbersAddTogetherInList([9, 15, 3, 7], 17)).toBe(false);
});
