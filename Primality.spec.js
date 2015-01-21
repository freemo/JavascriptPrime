describe("Primality", function() {
  it("should determine 2 is a prime number", function() {
    expect(isPrime(2)).toBeTruthy();
  });
  it("should determine 3 is a prime number", function() {
    expect(isPrime(3)).toBeTruthy();
  });
  it("should determine 4 is not a prime number", function() {
    expect(isPrime(4)).toBeFalsy();
  });
  it("should determine 5 is a prime number", function() {
    expect(isPrime(5)).toBeTruthy();
  });
  it("should determine 6 is not a prime number", function() {
    expect(isPrime(6)).toBeFalsy();
  });
  it("should determine 7 is a prime number", function() {
    expect(isPrime(7)).toBeTruthy();
  });
  it("should determine 8 is not a prime number", function() {
    expect(isPrime(8)).toBeFalsy();
  });
  it("should determine 9 is not a prime number", function() {
    expect(isPrime(9)).toBeFalsy();
  });
  it("should determine 10 is not a prime number", function() {
    expect(isPrime(10)).toBeFalsy();
  });
  it("should determine 11 is a prime number", function() {
    expect(isPrime(11)).toBeTruthy();
  });
  it("should determine 12 is not a prime number", function() {
    expect(isPrime(12)).toBeFalsy();
  });
  it("should determine 13 is a prime number", function() {
    expect(isPrime(13)).toBeTruthy();
  });
  it("should determine 14 is not a prime number", function() {
    expect(isPrime(14)).toBeFalsy();
  });
  it("should determine 15 is not a prime number", function() {
    expect(isPrime(15)).toBeFalsy();
  });
  it("should determine 16 is not a prime number", function() {
    expect(isPrime(16)).toBeFalsy();
  });
  it("should determine 17 is a prime number", function() {
    expect(isPrime(17)).toBeTruthy();
  });
  it("should determine 18 is not a prime number", function() {
    expect(isPrime(18)).toBeFalsy();
  });
  it("should determine 19 is a prime number", function() {
    expect(isPrime(19)).toBeTruthy();
  });
  it("should determine 20 is not a prime number", function() {
    expect(isPrime(20)).toBeFalsy();
  });
  it("should determine 37,120,123 is a prime number", function() {
    expect(isPrime(37120123)).toBeTruthy();
  });
});