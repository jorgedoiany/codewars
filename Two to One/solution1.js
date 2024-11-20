function longest(s1, s2) {
  let newS = s1.concat(s2).split('').sort();
  let longestS = [...new Set(newS)];
  
  return longestS.join('');
}
