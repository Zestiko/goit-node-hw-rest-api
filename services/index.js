const ImageService = require("./imageService");
const {
  register,
  login,
  saveTokenToUser,
  getUserById,
  unsetUserToken,
  updateSubscription,
  verifyUser,
  updateUser,
  findUserByEmail,
} = require("./user");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("./contacts");

module.exports = {
  ImageService,
  register,
  login,
  saveTokenToUser,
  getUserById,
  unsetUserToken,
  updateSubscription,
  verifyUser,
  updateUser,
  findUserByEmail,

  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
