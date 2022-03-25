const repeatStr = require('./task/string-repeat');

describe(
  'Тестируем функцию repeatStr',
  () => {
    const testCases = [
      {
        count: 3,
        text: 'Hi',
        expected: 'HiHiHi'
      },
      {
        count: 5,
        text: 'Hello',
        expected: 'HelloHelloHelloHelloHello'
      },
    ];
    testCases.forEach(test => {
      it(
        `Передаем число ${test.count} текст ${test.text} ожидаем ${test.expected}`,
        () => {
          const res = repeatStr(test.count, test.text);
          expect(res).toBe(test.expected);
        }
      );
    });
  }
)
