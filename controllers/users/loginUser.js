const { date, catchAsync, AppError } = require("../../utils");
const { login, saveTokenToUser } = require("../../models/user");

const jwt = require("jsonwebtoken");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await login(email);

  if (!user) {
    return next(new AppError(401, "Email or password is wrong"));
  }
  const passwordIsValid = await user.checkPassword(password, user.password);

  if (!passwordIsValid) {
    return next(new AppError(401, "Email or password is wrong"));
  }

  user.password = undefined;
  console.log(user.id);

  const token = signToken(user.id);
  await saveTokenToUser(user.id, token);
  


  res.status(201).json({
    Date: date(),
    token,
    user: {
      email: user.email,
      subscription: user.subscription
    },
  });
});

module.exports = loginUser;