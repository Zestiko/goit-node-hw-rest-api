const { getContactById } = require("../../models/contacts");
const { date, catchAsync } = require("../../utils");

const getById = catchAsync(async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    return res.status(404).json({
      Date: date(),
      message: `Contact with ID: ${contactId} not found :( `,
    });
  }
  res.status(200).json({
    Date: date(),
    contact,
  });
});

module.exports = getById;
