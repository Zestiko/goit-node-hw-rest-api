const { AppError, catchAsync } = require("../../utils");

const { Types } = require("mongoose");


const validateContactID = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;

  const idIsValid = Types.ObjectId.isValid(contactId);
  console.log(idIsValid);
  

  if (!idIsValid) return next(new AppError(404, "User does not exist"));

  next();
});

module.exports = validateContactID;