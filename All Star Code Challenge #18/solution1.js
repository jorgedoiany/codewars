function strCount(str, letter){
  
  let occurrences = 0;
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === letter) {
      occurrences++;
    }
  }
  return occurrences;
};
