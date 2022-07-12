const flattenObject = (obj, parent) => {
    const finalObj = {};
    generateFlatObj(obj, parent);
    return finalObj;
}

const generateFlatObj = (obj, parent) => {
  for (let key in obj) {
    const newParent = parent + key;
    const value = obj[key];
    if (typeof value === "object") {
      generateFlatObj(value, newParent + ".");
    } else {
      finalObj[newParent] = value;
    }
  }
};