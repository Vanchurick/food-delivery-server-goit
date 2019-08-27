const fs = require("fs");
const path = require("path");
const multer = require("multer");
const util = require("util");

const renameFile = util.promisify(fs.rename);

const TEMPORARY_IMAGE_FOLDER = path.join(__dirname);
const PRODUCTS_IMAGES_FOLDER = path.join(
  __dirname,
  "../..",
  "db",
  "products-images"
);

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, TEMPORARY_IMAGE_FOLDER);
  },

  filename: (req, file, next) => {
    next(null, file.originalname);
  }
});

const upload = multer({ storage });

const saveImageInProductsFolder = (fileObject, productId) => {
  const pathToTemporaryImage = path.join(
    TEMPORARY_IMAGE_FOLDER,
    fileObject.originalname
  );
  const fileFormat = fileObject.originalname.split(".")[1];
  const newFilePath = path.join(
    PRODUCTS_IMAGES_FOLDER,
    `${productId}.${fileFormat}`
  );

  return renameFile(pathToTemporaryImage, newFilePath)
    .then(() => {
      return newFilePath;
    })
    .catch(error => console.log(error));
};

const saveProductImage = (req, resp) => {
  const fileObject = req.file;
  const userId = req.body.userId;
  saveImageInProductsFolder(fileObject, userId).then(newFilePath => {
    resp.json({ status: `File have been saved at ${newFilePath}` });
  });
};

module.exports = () => [upload.single("image"), saveProductImage];
