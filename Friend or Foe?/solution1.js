function friend(friends){
  let bestFriend = []
  
  for (let i = 0; i < friends.length; i++) {
    if(friends[i].length === 4) {
      bestFriend.push(friends[i])
    }
  }
  return bestFriend;
}
