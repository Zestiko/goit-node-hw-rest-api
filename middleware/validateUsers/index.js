const validateUserRegister = require('./validateUserRegister')
const validateUserlogin = require('./validateUserlogin')
const validateUserToken = require('./validateUserToken')
const validateUserSubscription =require('./validateUserSubscription')
const uploadUserPhoto = require('./uploadUserPhoto')
const validateUserEmail = require("./validateUserEmail");

module.exports = {
  validateUserRegister,
  validateUserlogin,
  validateUserToken,
  validateUserSubscription,
  uploadUserPhoto,
  validateUserEmail,
};