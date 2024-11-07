function longestConsec(strarr, k) {
  
  let longestStr = '';
  
  if (k <= 0 || k > strarr.length) {
    return longestStr = '';
    }

  for (let i = 0; i < strarr.length - k + 1; i++) {
    let test = strarr.slice(i, i + k).join('');
    if (test.length > longestStr.length) {
      longestStr = test;
    }
  }
  
  return longestStr;
}
