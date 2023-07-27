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
/*
let Account = (function () {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function isValidPassword(password) {
    return userPassword === password;
  }

  function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * 62);
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"[
      randomIndex
    ];
  }

  function anonymize() {
    let result = "";

    for (let index = 0; index < 16; index += 1) {
      result += getRandomCharacter();
    }

    return result;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid Password";
      }
    },

    resetPassword(currentPassword, newPassword) {
      if (isValidPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return "Invalid Password";
      }
    },

    firstName(password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return "Invalid Password";
      }
    },

    lastName(password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return "Invalid Password";
      }
    },

    email(password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return "Invalid Password";
      }
    },
  };
})();
*/

// 6)
