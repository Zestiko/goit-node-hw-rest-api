const { date, catchAsync } = require("../../utils");
const { listContacts } = require("../../models/contacts");

const getAll = catchAsync(async (req, res, next) => {
  const contacts = await listContacts();

  res.status(200).json({
    Date: date(),
    contacts,
  });
});

module.exports = getAll;
