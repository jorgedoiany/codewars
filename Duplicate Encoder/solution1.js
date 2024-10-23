function duplicateEncode(word){
  
  let charCount = {}
  let newWord = ("");
  
    for(let i = 0; i < word.length; i++) {
      
      let char = word[i].toLowerCase();
      charCount[char] = (charCount[char] || 0) + 1;
      
      }
      
    for (let i = 0; i < word.length; i++) {
      
      let char = word[i].toLowerCase();
      
      newWord += (charCount[char] === 1) ? '(' : ')';
  }
    return newWord;
}
