const { date } = require("../../utils");
const { listContacts } = require("../../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const contacts = await listContacts();

     res.status(200).json({
      Date: date(),
      contacts,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAll;
