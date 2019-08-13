const getId = url => {
  const lastIndex = url.lastIndexOf("/");

  if (lastIndex !== -1) {
    return Number(url.slice(lastIndex + 1));
  }
};

module.exports = getId;
