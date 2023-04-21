const registerUser = require('./registerUser')
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const currentUser = require("./currentUser");
const patchUserSubscription = require('./patchUserSubscription')
const patchUserAvatar = require('./patchUserAvatar')
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");


module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  patchUserSubscription,
  patchUserAvatar,
  verifyEmail,
  resendVerifyEmail,
};