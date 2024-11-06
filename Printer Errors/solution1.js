function printerError(s) {
  
  let errors = 0;
  const regexNtoZ = /[n-z]/;
  
  for (let i = 0; i < s.length; i++) {
    if (regexNtoZ.test(s[i])) {
      errors++;
    } 
  }
  return errors + "/" + s.length;
  }
