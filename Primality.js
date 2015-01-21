function isPrime(number) {
  if ((number == 2) || (number == 3))
    return true;
  if ((number % 2 === 0) || (number % 3 === 0))
    return false;

  var maxDivisor = Math.sqrt(number);
  var dividendIndex = 1;
  var dividend = 5;
  while (dividend < maxDivisor) {
    if (number % dividend === 0)
      return false;

    dividend + 2;

    if (dividend > maxDivisor)
      true;

    if (number % dividend === 0)
      return false;

    dividendIndex++;
    dividend = 6 * dividendIndex - 1;
  }

  return true;
}