const { updateContact } = require("../../models/contacts");
const { catchAsync } = require("../../utils");

const patchContact = catchAsync(async (req, res, next) => {
  
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);

  if (!result) {
    return res.status(404).json({ message: " Not found " });
  }
  res.status(200).json({ message: result });

});

module.exports = patchContact;