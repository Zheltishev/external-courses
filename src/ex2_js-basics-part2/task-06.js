function primeNumbers(num) {
  if (num === 0 || num === 1) {
    return `${num} не относится к простым`;
  }

  if (num < 0 || num > 1000) {
    return 'Данные неверны';
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `Число ${num} - составное число`;
    }
  }

  return `Число ${num} - простое число`;
}

module.exports = primeNumbers;
