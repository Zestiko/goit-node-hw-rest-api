const { getUserById } = require("../../services");
const {
  catchAsync,
  AppError,
  
} = require("../../utils");
const jwt = require("jsonwebtoken");

const validateUserToken = catchAsync(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];

  if (!token) return next(new AppError(401, "Not authorized"));

  const { id } = jwt.verify(token, process.env.JWT_SECRET);

  const user = await getUserById(id);

  if (!user || user.token !== token) {
    return next(new AppError(401, "Not authorized"));
  }

  req.user = user;
  next();
});

module.exports = validateUserToken;
