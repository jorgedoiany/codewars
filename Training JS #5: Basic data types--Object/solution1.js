function animal(obj){
  const {name, legs, color} = obj;
  const description = `This ${color} ${name} has ${legs} legs.`;

  return description;
}
