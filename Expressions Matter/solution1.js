function expressionMatter(a, b, c) {
  let combinations = [
  a * b * c,
  a + b + c,
  a * b + c,
  a + b * c,
  (a * b) + c,
  a * (b + c),
  (a + b) * c]
  
  return Math.max(...combinations);
}
