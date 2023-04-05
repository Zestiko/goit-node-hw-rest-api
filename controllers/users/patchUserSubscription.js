const { updateSubscription, getUserById } = require("../../models/user");
const { catchAsync, date } = require("../../utils");

const patchUserSubscription = catchAsync(async (req, res, next) => {
  const {  id } = req.user;
  await updateSubscription(id, req.body);
  const {email, subscription} = await getUserById(id);

  res.status(200).json({
    Date: date(),
    data: {
      email,
      subscription,
    },
  });
});

module.exports = patchUserSubscription;
