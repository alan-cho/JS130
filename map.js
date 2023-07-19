//Reimplement Array.prototype.map
function map(array, callback) {
  let resultArray = [];
  for (let index = 0; index < array.length; index += 1) {
    resultArray.push(callback(array[index]));
  }
  return resultArray;
}
