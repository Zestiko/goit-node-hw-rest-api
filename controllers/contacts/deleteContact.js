const { removeContact,  } = require("../../models/contacts");
const { date, catchAsync } = require("../../utils");

const deleteContact = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;

  const removedContact = await removeContact(contactId);

  if (removedContact) {
    return res.status(200).json({
      Date: date(),
      message: "contact deleted",
    });
  } else {
    return res.status(404).json({
      Date: date(),
      message: "Not found",
    });
  }
});

module.exports = deleteContact;
