const { getContactById } = require("../../models/contacts");
const { date } = require("../../utils");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    console.log(contactId);
    const contact = await getContactById(contactId);
    console.log(contact);

    if (!contact) {
      return res.status(404).json({
        Date: date(),
        message: `Contact with ID: ${contactId} not found :( `,
      });
    }
    res.status(200).json({
      Date: date(),
      contact,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getById;
