import { dsa, getNearestSmallers } from "./scratch";
const maxSpace = Math.pow(10, 9);
const getRandom = (end) => Math.floor(Math.random() * end + 1);
const getRandomSpace = (length) =>
  Array(length)
    .fill(0)
    .map(() => getRandom(maxSpace));

const testCases = [
  [[1, 2, 3, 1, 2], 1, 3],
  [[1, 1, 1], 2, 1],
  [[2, 5, 4, 6, 8], 3, 4],
];

jest.setTimeout(100);

describe.each([
  // 0 < N <= 10^5, 0 < X <= N, 0 < space[i] <= 10^9
  [Math.pow(10, 4), Math.pow(10, 0)],
  [Math.pow(10, 4), Math.pow(10, 4)],
  [Math.pow(10, 4), Math.pow(10, 4) / 2],

  [Math.pow(10, 5), Math.pow(10, 0)],
  [Math.pow(10, 5), Math.pow(10, 5)],
  [Math.pow(10, 5), Math.pow(10, 5) / 2],

  [Math.pow(10, 6), Math.pow(10, 0)],
  [Math.pow(10, 6), Math.pow(10, 6)],
  [Math.pow(10, 6), Math.pow(10, 6) / 2],
])("random cases", (n, x) => {
  let start;
  const results = [];
  const space = getRandomSpace(n);
  test.each(dsa.map((_, i) => i))(
    "all results are same",
    (i) => {
      start = new Date();
      const result = dsa[i](space, x);
      console.log(`${i}:[${n}:${x}] ${new Date() - start} ms`);
      if (results.length > 0) {
        expect(results.pop()).toStrictEqual(result);
      }
      results.push(result);
    },
    10
  );
});

describe("main", () => {
  dsa.forEach((_, i) => {
    test.each(testCases)(`dsa[${i}] (%s, %s) -> %s`, (space, x, expected) => {
      const result = dsa[i](space, x);

      expect(result).toBe(expected);
    });
  });
});

describe("getNearestSmallers", () => {
  test.each([
    [
      [1, 2, 3, 1, 2],
      [5, 3, 3, 5, 5],
    ],
    [
      [1, 1, 1],
      [3, 3, 3],
    ],
    [
      [2, 5, 4, 6, 8],
      [5, 2, 5, 5, 5],
    ],
  ])("(%s) -> %s", (space, expected) => {
    const result = getNearestSmallers(space);

    expect(result).toStrictEqual(expected);
  });

  test.each([
    [
      [1, 2, 3, 1, 2],
      [-1, 0, 1, -1, 3],
    ],
    [
      [1, 1, 1],
      [-1, -1, -1],
    ],
    [
      [2, 5, 4, 6, 8],
      [-1, 0, 0, 2, 3],
    ],
  ])("Reverse (%s) -> %s", (space, expected) => {
    const result = getNearestSmallers(space, true);

    expect(result).toStrictEqual(expected);
  });
});
