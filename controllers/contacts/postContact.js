const { addContact } = require("../../models/contacts");
const { date,  catchAsync } = require("../../utils");

const postContact = catchAsync(async (req, res, next) => {
  const contact = await addContact(req.body);
  return res.status(201).json({
    Date: date(),
    contact,
  });
});

module.exports = postContact;
