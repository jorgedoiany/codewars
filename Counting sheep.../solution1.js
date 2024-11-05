function countSheeps(sheep) {
  let present = 0;
  
  for (let i = 0; i < sheep.length; i++) {
    sheep[i] === true ? present++ : 0;
  }
    return present;
}
