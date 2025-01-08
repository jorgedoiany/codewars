var number=function(array){
  return array.map(function(string, index) {
    return index + 1 + ": " + string;
  });
}
