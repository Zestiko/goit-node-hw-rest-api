const { catchAsync, AppError, } = require("../../utils");

const validateContactFavorite = catchAsync(async (req, res, next) => {
  const { favorite } = req.body;
  if (favorite === undefined) {
    return next(new AppError(400, "missing field favorite"));
  }
  const requesBodyLength = Object.keys(req.body).length;
  if (requesBodyLength >= 2) {
    return next(new AppError(400, "Pass only one field favorite"));
  }

  next();
});

module.exports = validateContactFavorite;
