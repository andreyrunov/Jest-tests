function opposite(number) {
  if (number > 0) {
  return -number;
  } else if (number === 0) {
  return 0;
  } else {
  return number * -1;
  }
}

module.exports = opposite;
