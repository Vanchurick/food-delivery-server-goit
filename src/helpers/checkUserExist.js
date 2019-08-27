const checkUserExist = (arr, name) => {
  return arr.some(el => el.username === name);
};
module.exports = checkUserExist;
