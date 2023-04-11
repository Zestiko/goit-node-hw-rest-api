const validateUserRegister = require('./validateUserRegister')
const validateUserlogin = require('./validateUserlogin')
const validateUserToken = require('./validateUserToken')
const validateUserSubscription =require('./validateUserSubscription')
const uploadUserPhoto = require('./uploadUserPhoto')

module.exports = {
  validateUserRegister,
  validateUserlogin,
  validateUserToken,
  validateUserSubscription,
  uploadUserPhoto,
};