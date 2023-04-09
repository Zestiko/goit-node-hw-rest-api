
const { date, catchAsync } = require("../../utils");
const { register } = require("../../models/user");


const registerUser = catchAsync(async (req, res, next) => {

const newUser = await register(req.body);
  res.status(201).json({
    Date: date(),
    data: newUser,
  });
});

module.exports = registerUser;
