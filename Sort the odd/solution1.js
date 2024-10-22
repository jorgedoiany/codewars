function sortArray(array) {
  let odd = [];
  let newArray = [...array];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
  }
  
  odd.sort((a, b) => a - b);

  let oddIndex = 0; 
  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j] % 2 !== 0) {
      if (oddIndex < odd.length) { 
        newArray[j] = odd[oddIndex]; 
        oddIndex++; 
      }
    }
  }

  return newArray; 
}
