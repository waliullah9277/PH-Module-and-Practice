// Inventory Object Manager

const manageInventoryObject = (obj, action) => {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "Invalid";
  }

  if (
    action !== "keys" &&
    action !== "values" &&
    action !== "entries" &&
    !action.startsWith("delete:") &&
    action !== "seal" &&
    action !== "freeze"
  ) {
    return "Invalid";
  }

  if (action === "keys") {
    return Object.keys(obj);
  } else if (action === "values") {
    return Object.values(obj);
  } else if (action === "entries") {
    return Object.entries(obj);
  } else if (action.startsWith("delete:")) {
    const propName = action.split(":")[1];
    const newObj = { ...obj };
    delete newObj[propName];
    return newObj;
  } else if (action === "seal") {
    return Object.seal(obj);
  } else if (action === "freeze") {
    return Object.freeze(obj);
  }
};

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "keys"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "values"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "delete:c"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "seal"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "freeze"));
console.log(manageInventoryObject({ a: 1 }, "shrink"));
