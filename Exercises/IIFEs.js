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
let ItemCreator = (function () {
  function generateSkuCode(itemName, category) {
    return (
      itemName.replace(/\s/g, "").slice(0, 3).toUpperCase() +
      category.replace(/\s/g, "").slice(0, 2).toUpperCase()
    );
  }

  function isValidItemName(itemName) {
    return itemName.replace(/\s/g, "").length >= 5;
  }

  function isValidCategory(category) {
    return (
      category.replace(/\s/g, "").length >= 5 &&
      category.split(" ").length === 1
    );
  }

  function isQuantityProvided(quantity) {
    return quantity !== undefined;
  }

  return function (itemName, category, quantity) {
    if (
      isValidItemName(itemName) &&
      isValidCategory(category) &&
      isQuantityProvided(quantity)
    ) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],
  getItem: function (skuCode) {
    return this.items.filter(function (item) {
      return item.skuCode === skuCode;
    })[0];
  },

  create: function (itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update: function (skuCode, itemInformation) {
    Object.assign(this.getItem(skuCode), itemInformation);
  },

  delete: function (skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  list: function () {
    return this.items;
  },

  inStock: function () {
    return this.items.filter(function (item) {
      return item.quantity > 0;
    });
  },

  itemsInCategory: function (category) {
    return this.items.filter(function (item) {
      return item.category === category;
    });
  },
};

let ReportManager = {
  init: function (itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    const item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        Object.keys(item).forEach((key) => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    };
  },

  reportInStock: function () {
    console.log(
      this.items
        .inStock()
        .map(function (item) {
          return item.itemName;
        })
        .join(",")
    );
  },
};
