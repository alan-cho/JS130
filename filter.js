//Reimplement Array.prototype.filter
function filter(array, callback) {
  let resultArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index])) {
      resultArray.push(array[index]);
    }
  }
  return resultArray;
}
