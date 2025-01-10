function isValidWalk(walk) {
  
  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;
  
  if(walk.length !== 10) {
    return false;
  }
  
  for(let i = 0; i < walk.length; i++) {
      if(walk[i] === 'n') n++;
      else if(walk[i] === 's') s++;
      else if(walk[i] === 'e') e++;
      else if(walk[i] === 'w') w++;
  }
 return n === s && e === w;
}
