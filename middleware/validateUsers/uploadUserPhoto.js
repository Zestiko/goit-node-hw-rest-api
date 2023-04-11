// const multer = require("multer");
// const uuid = require('uuid').v4
// const {
//   catchAsync,
//   AppError,
//   validateJoiUserRegister,
// } = require("../../utils");


// const multerStorage = multer.diskStorage({
//   destination: (req, file, callbakcFn) => {
//     callbakcFn(null, "public/avatars");
//   },
//   filename: (req, file, callbakcFn) => {
//     const ext = file.mimetype.split('/')[1];
//     callbakcFn(null, `${req.user.id}-${uuid()}.${ext}`);
//   },
// });

// const multerFilter = (req, file, callbakcFn) => {
//   if (file.mimetype.startsWith('image/')) {
//     callbakcFn(null, true);
//   } else {
//     callbakcFn(new AppError(400, 'Upload image only...'),false);
//   }
// }

// const uploadUserPhoto = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
//   limits: {
//     fieldSize: 1024 * 1024 * 5
//   }
// }).single("avatar");
const ImageService = require("../../services/imageService");

const uploadUserPhoto = ImageService.upload('avatar');

module.exports = uploadUserPhoto;
