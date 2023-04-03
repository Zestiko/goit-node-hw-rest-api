const { catchAsync, date } = require("../../utils");


const currentUser = catchAsync(async (req, res, next) => {
  const {  email, subscription } = req.user;

  res.status(200).json({
    Date: date(),
    data: {
      email,
      subscription,
    },
  });
});

module.exports = currentUser;
