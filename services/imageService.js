const multer = require("multer");
const uuid = require("uuid").v4;
const fse = require("fs-extra");
const Jimp = require("jimp");
const path = require("path");

const { AppError } = require("../utils");

class ImageService {
  static upload(name) {

    const multerStorage = multer.memoryStorage();

    const multerFilter = (req, file, callbakcFn) => {
      if (file.mimetype.startsWith("image/")) {
        callbakcFn(null, true);
      } else {
        callbakcFn(new AppError(400, "Upload image only..."), false);
      }
    };

    return multer({
      storage: multerStorage,
      fileFilter: multerFilter,
    }).single(name);
  }

  static async save(file, options, ...pathSegments) {
    const fileName = `${uuid()}.jpeg`;
    const fullFilePath = path.join(process.cwd(), "public", ...pathSegments);
    const tmpPath = path.join(process.cwd(), "tmp", fileName);

    await fse.ensureDir(fullFilePath);
    await fse.writeFile(tmpPath, file.buffer);
    const image = await Jimp.read(file.buffer)
    image
      .resize(...options || 250, 250)
      .quality(60)
      .writeAsync(path.join(fullFilePath, fileName));
    
    return path.join(...pathSegments, fileName);
  }
}

module.exports = ImageService;
