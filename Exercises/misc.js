// 1)
/*
function sum(...arguments) {
  return arguments.reduce(function (a, b) {
    return a + b;
  });
}

sum(1, 4, 5, 6); // 16
*/

// 2)
/*
function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ["James", "Tiberius", "Kirk"];

console.log(formatName(...fullName));
// logs: Kirk, James T.
*/
