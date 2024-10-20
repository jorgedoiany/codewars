function points(games) {
  
    let totalPoints = 0;

      for (let i = 0; i < games.length; i++) {

        let result = games[i].split(':');
        let x = Number(result[0]);
        let y = Number(result[1]);
      
         if (x > y) {
           totalPoints += 3;
     }
        else if (x === y) {
          totalPoints += 1;
      } else {
          totalPoints += 0;
    }
  }
  return totalPoints;
}
