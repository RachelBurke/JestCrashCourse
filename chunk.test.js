const chunkArray = require("./chunk");

test("chunkArray function exists", () => {
    expect(chunkArray).toBeDefined();
});

test("Chunk in an array with 10 values with a length of 2", () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const len = 2;
    const chunkedArr = chunkArray(numbers, len);
    expect(chunkedArr).toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]);
});

test("Chunk in an array with 3 values with a length of 1", () => {
    const numbers = [0, 1, 2];
    const len = 1;
    const chunkedArr = chunkArray(numbers, len);
    expect(chunkedArr).toEqual([[0], [1], [2]]);
})