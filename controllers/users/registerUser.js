const { date, catchAsync, generateVerefyToken, sendMail } = require("../../utils");
const { register } = require("../../services");


const registerUser = catchAsync(async (req, res, next) => {
  const verificationToken = generateVerefyToken();

  const newUser = await register(req.body, verificationToken);
  const email = {
    to: newUser.email,
    subject: "Verefy your email",
    html: `<p><a>localhost:3333/api/users/verify/${verificationToken}</a></p>`,
  };
  await sendMail(email);
  res.status(201).json({
    Date: date(),
    data: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
});

module.exports = registerUser;
