const { date, catchAsync } = require("../../utils");
const { listContacts } = require("../../models/contacts");

const getAll = catchAsync(async (req, res, next) => {
  const { id } = req.user;
  const { limit, page ,favorite} = req.query;

  const paginationPage = +page || 1;
  const paginationLimit = +limit || 5;
  const skip = (paginationPage - 1) * paginationLimit;

  const contacts = await listContacts({ id, skip, paginationLimit, favorite });

  res.status(200).json({
    Date: date(),
    page: paginationPage,
    limit: paginationLimit,

    contacts,
  });
});

module.exports = getAll;
