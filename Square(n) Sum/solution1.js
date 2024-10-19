function squareSum(numbers){
  let totalSum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    totalSum += Math.pow(numbers[i], 2)
    }
  return totalSum;
}
