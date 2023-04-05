const {
  catchAsync,
  AppError,
  validateJoiUserSubscription,
} = require("../../utils");

const validateUserSubscription = catchAsync(async (req, res, next) => {
  const { error, value } = validateJoiUserSubscription(req.body);

  if (error) {
    const errorMessage = error.details
      .map(({ message }) => message)
      .join(";   ");
    return next(new AppError(400, errorMessage));
  }
  req.body = value;
  next();
});

module.exports = validateUserSubscription;
