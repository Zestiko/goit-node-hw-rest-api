const {  catchAsync } = require("../../utils");
const { unsetUserToken } = require("../../services");

const logoutUser = catchAsync(async (req, res, next) => {
  const { id } = req.user;
  await unsetUserToken(id);
  res.status(204).json();
});

module.exports = logoutUser;
