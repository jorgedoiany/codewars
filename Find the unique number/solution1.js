function findUniq(arr) {
  const common = arr[0] === arr[1] ? arr[0] : arr[2];
  return arr.find(val => val !== common);
}
