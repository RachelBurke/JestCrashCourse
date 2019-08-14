const functions = require("./functions");

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not.toBe
test("Adds 2 + 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

/**
 * CHECK FOR TRUTHY & FALSY VALUES
 * toBeNull matches only null
 * toBeUndefined matches only undefined
 * toBeDefined is the opposite of of toBeUndefined
 * toBeTruthy matches anything that an if statement treats as true
 * toBeFalsy matches anything that an if statement treats as false
 */

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
//    toBe is for primitive types
//    toEqual for arrays and objects
test("User should be Rachel Burke object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Rachel",
    lastName: "Burke"
  });
});

// Less than and greater than
//    Notice we can put code in test and not functions file
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex (regular expressions)
test("There is no I in team", () => {
  expect("team").not.toMatch("/I/i");
});

test("There is I in team", () => {
  expect("teami").not.toMatch("/I/i");
});
