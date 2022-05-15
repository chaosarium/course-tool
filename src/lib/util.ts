export const projection = { _id: false, __v: false };
export const MAX_LIMIT = 10;

export const standardizeID = (id) => {
  if (!id.includes("-") && id.length >= 5) {
    let newString = id.slice(0, 2) + "-" + id.slice(2);
    return newString;
  }
  return id;
};

export const singleToArray = (param) => {
  if (param instanceof Array) {
    return param;
  } else {
    return [param];
  }
};
