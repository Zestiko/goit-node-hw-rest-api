const {
  catchAsync,
  AppError,
  validateJoiUserEmail,
} = require("../../utils");

const validateUserEmail = catchAsync(async (req, res, next) => {
  const { error, value } = validateJoiUserEmail(req.body);

  if (error) {

    return next(new AppError(400, "missing required field email"));
  }
  req.body = value;
  next();
});

module.exports = validateUserEmail;
