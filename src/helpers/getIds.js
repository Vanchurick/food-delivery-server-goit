const getIds = parsedURL => {
  const allPartsOfURL = parsedURL.path.split("/");
  const category = allPartsOfURL[allPartsOfURL.length - 1].split("=");
  const arrOfIdsInString = category[1].split(",");
  const arrOfIdsInNumber = arrOfIdsInString.map(el => Number(el));
  return arrOfIdsInNumber;
};

module.exports = getIds;
