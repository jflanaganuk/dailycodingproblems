const productOfArrayExceptSelf = require("./code");

test("should pass the challenge", () => {
    expect(productOfArrayExceptSelf([1, 2, 3, 4, 5])).toMatchObject([120, 60, 40, 30, 24]);
    expect(productOfArrayExceptSelf([3, 2, 1])).toMatchObject([2, 3, 6]);
});
