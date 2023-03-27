const { catchAsync, AppError, validateJoiFavorite } = require("../../utils");

const validateContactFavorite = catchAsync(async (req, res, next) => {
  const { favorite } = req.body;
  if (favorite === undefined) {
    return next(new AppError(400, "missing field favorite"));
  }
  const { error, value } = validateJoiFavorite(req.body);
 
  if (error) {
    const errorMessage = error.details
      .map(({ message }) => message)
      .join(";   ");
    return next(new AppError(400, errorMessage));
  }
  req.body = value;
  next();
});

module.exports = validateContactFavorite;
