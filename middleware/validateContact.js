const { catchAsync, AppError, validateJoi } = require("../utils");

const validateContact = catchAsync(async (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return next(new AppError(400, "missing required name field"));
  }
  
  const { error, value } = validateJoi(req.body);
  
  const errorMessage = error.details.map(({message})=> message).join(';   ')

    if (error) {
      return next(new AppError(400, errorMessage));
    }
    req.body = value;
    next();

});

module.exports = validateContact;