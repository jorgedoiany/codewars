var number = function(busStops){
 let totalPassengers = 0;
  for (let i = 0; i < busStops.length; i++) {
    let on = busStops [i] [0];
    let off = busStops [i] [1];
    
    totalPassengers += on;
    totalPassengers -= off;
  }
  return totalPassengers;
}
