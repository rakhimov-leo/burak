function getHighestIndex(array) {
  const max = Math.max(...array);
  return array.indexOf(max);
}
console.log(getHighestIndex([5, 21, 12, 21, 8]));
