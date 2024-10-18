function accum(s) {
  let array = [];
	for (let i = 0; i < s.length; i++) {
    array.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
  }
  return array.join('-');
}
