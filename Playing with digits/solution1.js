function digPow(n, p){
  let digits = n.toString().split("");
  let positiveInterger = 0;
  
  for (let i = 0; i < digits.length; i++) {
    positiveInterger += Math.pow(parseInt(digits[i]), p + i);
  }
  
  if (positiveInterger % n === 0) {
    return positiveInterger / n;
  } else {
    return -1;
  }
}
