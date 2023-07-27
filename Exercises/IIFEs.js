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
