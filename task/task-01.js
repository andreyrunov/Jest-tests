function reverseString(str) {
  let str2 = str.split('')
                  .sort(() => -Infinity)
                    .join('');
        console.log(str2);
        return str2;
}

// это добавляем для экспорта функции на тестирование
module.exports = reverseString;
