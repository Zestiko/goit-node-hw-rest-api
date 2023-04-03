const express = require("express");

const router = express.Router();

const {
  getAll,
  getById,
  postContact,
  deleteContact,
  putContact,
  patchContact,
} = require("../../controllers/contacts");
const {
  validateContactCreate,
  validateContactUpdate,
  validateContactFavorite,
} = require("../../middleware/validateContact");
const { validateUserToken } = require("../../middleware/validateUsers");

router.use(validateUserToken);

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", validateContactCreate, postContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", validateContactUpdate, putContact);

router.patch("/:contactId/favorite", validateContactFavorite, patchContact);

module.exports = router;
