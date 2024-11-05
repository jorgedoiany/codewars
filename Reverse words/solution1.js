function reverseWords(str) {
  
  let inverted = str.split(' ');
  
  let invertedTerm = inverted.map((term) => term.split('').reverse().join(''));
  
  return invertedTerm.join(' ');
  
};
