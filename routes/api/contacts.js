const express = require("express");

const router = express.Router();

const {
  getAll,
  getById,
  postContact,
  deleteContact,
  putContact,
} = require("../../controllers/contacts");
const validateContact = require("../../middleware/validateContact");

router.get("/",getAll);

router.get("/:contactId",getById);

router.post("/",validateContact, postContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", putContact);

module.exports = router;
