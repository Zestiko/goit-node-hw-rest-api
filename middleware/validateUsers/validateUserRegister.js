const {
  catchAsync,
  AppError,
  validateJoiUserRegister,
} = require("../../utils");

const validateUserRegister = catchAsync(async (req, res, next) => {
 
  const { error, value } = validateJoiUserRegister(req.body);

  if (error) {
    const errorMessage = error.details
      .map(({ message }) => message)
      .join(";   ");
    return next(new AppError(400, errorMessage));
  }
  req.body = value;
  next();
});

module.exports = validateUserRegister;
