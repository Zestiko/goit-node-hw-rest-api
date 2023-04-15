const { date, catchAsync, AppError, sendMail } = require("../../utils");

const { findUserByEmail } = require("../../services");

const resendVerifyEmail = catchAsync(async (req, res, next) => {

  const user = await findUserByEmail(req.body.email);
  console.log(user);

  console.log(user);
  if (!user?.verificationToken ) {
    throw new AppError(400, "Verification has already been passed");
  }

  if (user?.verify === true) {
    const email = {
      to: req.body.email,
      subject: "Verefy your email",
      html: `<p><a>localhost:3333/api/users/verify/${user.verificationToken}</a></p>`,
    };
    await sendMail(email);
  }

  

  res.status(200).json({
    Date: date(),
    message: "Verification email sent",
  });
});

module.exports = resendVerifyEmail;
