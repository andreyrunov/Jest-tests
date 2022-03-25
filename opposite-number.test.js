const opposite = require('./task/opposite-number');

describe(
  'Проверка функции opposite',
  () => {
   const testCases = [
     {
       in: 3,
       out: -3
     },
     {
       in: -72,
       out: 72
     },
     {
       in: 0,
       out: 0
     },
     {
       in: -0,
       out: 0
     },
   ];
   testCases.forEach(test => {
     it(
       `Проверяем in: ${test.in}, получаем ${test.out}`,
       () => {
         const res = opposite(test.in);
         expect(res).toBe(test.out); 
       }
     );
   });
  }
)
