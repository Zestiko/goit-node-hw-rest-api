const { catchAsync, AppError, validateJoi } = require("../../utils");

const validateContactUpdate = catchAsync(async (req, res, next) => {
 
  const requesBodyLength = Object.keys(req.body).length;
  if (requesBodyLength < 1) {
    return next(new AppError(400, "missing required name field"));
  }
  const { error, value } = validateJoi(req.body);
 

  if (error) {
    const errorMessage = error.details
      .map(({ message }) => message)
      .join(";   ");
    return next(new AppError(400, errorMessage));
  }
  req.body = value;
  next();
});

module.exports = validateContactUpdate;
