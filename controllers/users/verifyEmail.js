const { date, catchAsync, AppError } = require("../../utils");
const { verifyUser, updateUser } = require("../../services");


const verifyEmail = catchAsync(async (req, res, next) => {
  const { verificationToken } = req.params
  const user = await verifyUser(verificationToken);
  if (!user) {
    throw new AppError(404, "User not found");
  }

await updateUser(user._id, {
   verificationToken: null,
   verify: true,
 });
  res.status(200).json({
    Date: date(),
    message: "Verification successful",
  });
});

module.exports = verifyEmail;
