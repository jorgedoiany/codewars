function tribonacci(signature,n){
  
  let result = signature.slice(0, n);
  
  while (result.length < n) {
    let nextValue = result.slice(-3).reduce((a, b) => a + b, 0);
    result.push(nextValue);
  }
  return result;
}
