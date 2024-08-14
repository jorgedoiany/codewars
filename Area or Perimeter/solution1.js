const areaOrPerimeter = function(l , w) {
  let area = l * 2;
  let perimeter = (l + w) * 2;
  
  if (l === w) {
    let area = l * l;
    return area;
  } else {
    let perimeter = (l + w) * 2;
    return perimeter;
  }
};
