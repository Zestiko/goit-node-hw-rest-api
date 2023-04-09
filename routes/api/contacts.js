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
  validateContactID,
  validateContactOwner,
} = require("../../middleware/validateContact");
const { validateUserToken } = require("../../middleware/validateUsers");

router.use(validateUserToken);

router.get("/", getAll);

router.post("/", validateContactCreate, postContact);

// router.use(validateContactOwner);

router.get("/:contactId", validateContactID, validateContactOwner, getById);

router.delete(
  "/:contactId",
  validateContactID,
  validateContactOwner,
  deleteContact
);

router.put(
  "/:contactId",
  validateContactID,
  validateContactUpdate,
  validateContactOwner,
  putContact
);

router.patch(
  "/:contactId/favorite",
  validateContactID,
  validateContactFavorite,
  validateContactOwner,
  patchContact
);

module.exports = router;
