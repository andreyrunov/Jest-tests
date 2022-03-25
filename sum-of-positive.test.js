const positiveSum = require('./task/sum-of-positive');

describe(
  'Сумма положительных чисел в массиве',
  () => {
    const testCases = [
      {
        in: [2, -8, 12, -2, 7, 3, 10, -5],
        expected: 34
      },
      {
        in: [-2, -1, -7, -12, -4],
        expected: 0
      },
      {
        in: [0, 0, 0, 0],
        expected: 0
      },
    ];
    testCases.forEach(test => {
      it(
        `Входящие данные: ${test.in}, должны получить: ${test.expected}`,
        () => {
          const res = positiveSum(test.in);
          expect(res).toEqual(test.expected);
        }
      );
    });
  }
)
