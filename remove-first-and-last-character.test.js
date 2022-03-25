const removeChar = require('./task/remove-first-and-last-character');

describe(
  'Тестируем функцию removeChar',
  () => {
    const testCases = [
      {
        in: 'Привет',
        expected: 'риве'
      },
      {
        in: 'Ксения',
        expected: 'сени'
      },
      {
        in: '123456789',
        expected: '2345678'
      }
    ];
    testCases.forEach(test => {
      it(
        `Входящие данные: ${test.in}, ожидаем получить ${test.expected}`,
        () => {
          const res = removeChar(test.in);
          expect(res).toBe(test.expected);
        }
      );
    })
  }
)
