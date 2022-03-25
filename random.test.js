const randomInt = require('./task/task-03');

describe('Тестируем случайное число', () => {
  const testCases = [
    {
      from: 100,
      to: 110,
    },
    {
      from: 200,
      to: 201,
    }
  ];
  testCases.forEach(test => {
    it(
      `from : ${test.from} to : ${test.to}`,
      () => {
        const res = randomInt(test.from, test.to);
        console.log(res);
        // ожидаю, что res будет больше или равен, чем test.from
        expect(res).toBeGreaterThanOrEqual(test.from);
        // ожидаю, что res будет меньше или равен, чем test.to
      }
    );
  });
})
