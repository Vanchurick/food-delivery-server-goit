const getCategory = parsedURL => {
  const allPartsOfURL = parsedURL.path.split("/");
  const arrWitCategory = allPartsOfURL[allPartsOfURL.length - 1].split("=");
  const category = arrWitCategory[arrWitCategory.length - 1];
  return category;
};

module.exports = getCategory;
