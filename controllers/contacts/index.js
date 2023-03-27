const getAll = require('./getAll')
const getById = require("./getById");
const deleteContact = require("./deleteContact");
const postContact = require("./postContact");
const putContact = require("./putContact");
const patchContact = require("./patchContact");
module.exports = {
  getAll,
  getById,
  deleteContact,
  postContact,
  putContact,
  patchContact,
};