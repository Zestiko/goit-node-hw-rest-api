const { removeContact } = require("../../models/contacts");
const { date } = require("../../utils");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removedContact = await removeContact(contactId);

    if (removedContact) {
     return res.status(200).json({
       Date: date(),
       message: "contact deleted",
     });
    } else {
      return res.status(404).json({
        Date: date(),
        message: "Not found",
      });
    }
  } catch (error) {}
};

module.exports = deleteContact;
