function nbYear(p0, percent, aug, p) {
  
  let yearEndPopulation = (p0 + p0 * (percent / 100) + aug);
  let yearsToTargetPopulation = 0;
  
  for (let i = 0; yearEndPopulation < p; i++) {
    yearEndPopulation = Math.floor(yearEndPopulation + yearEndPopulation * (percent / 100) + aug);
    
   yearsToTargetPopulation++;
}
  return yearsToTargetPopulation + 1;
  };
