const validateContactCreate = require("./validateContactCreate");
const validateContactUpdate = require("./validateContactUpdate");
const validateContactFavorite = require("./validateContactFavorite");
const validateContactID = require("./validateContactID");
const validateContactOwner = require("./validateContactOwner");

module.exports = {
  validateContactCreate,
  validateContactUpdate,
  validateContactFavorite,
  validateContactID,
  validateContactOwner,
};
