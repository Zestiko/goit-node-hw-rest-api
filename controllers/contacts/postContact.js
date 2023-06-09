const { addContact } = require("../../services");
const { date,  catchAsync } = require("../../utils");

const postContact = catchAsync(async (req, res, next) => {
  const contact = await addContact(req.body,req.user);
  return res.status(201).json({
    Date: date(),
    contact,
  });
});

module.exports = postContact;
