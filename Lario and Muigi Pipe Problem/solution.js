function pipeFix(numbers){
  
  let newPipes = []
 
  for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    newPipes.push(i);
  }
  
  return newPipes;

}
