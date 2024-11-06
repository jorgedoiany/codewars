function squareDigits(num){
  
  let digits = num.toString().split('');
  
  let square = digits.map((digit) => Math.pow(digit, 2));
  
  return parseInt(square.join('')); 
  
}
