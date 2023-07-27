// 1)
/*
function myBind(func, context) {
  return function () {
    return func.apply(context);
  };
}
*/

// 2)
/*
function myBind(func, context, ...additionalArgs) {
  return function (...arguments) {
    const allArguments = additionalArgs.concat(arguments);
    return func.apply(context, ...allArguments);
  };
}
*/

// 3)
/*
function newStack() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
    },

    pop() {
      let lastItem = stack.pop();
      return lastItem;
    },

    printStack() {
      stack.forEach((item) => `${console.log(item)}\n`);
    },
  };
}
*/

// 4)
/*
function delegate(object, method, ...additionalArgs) {
  return function () {
    return object[method].apply(object, additionalArgs);
  };
}
*/

// 5)
