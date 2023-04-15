const { getContactById } = require("../../services");
const { AppError, catchAsync,  } = require("../../utils");

const validateContactOwner = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;
  const { id } = req.user;
  const contact = await getContactById(contactId);

  if (!contact) {
    return next()
  }
  if (id !== contact.owner?.toString()) {
    return next(new AppError(403, "Forbidden content"));
  }
  req.contact = contact;
  next();
});

module.exports = validateContactOwner;
