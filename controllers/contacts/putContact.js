const { updateContact } = require("../../models/contacts");

const { date,  catchAsync } = require("../../utils");

const putContact = catchAsync(async (req, res, next) => {
  
    const { contactId } = req.params;


    const result = await updateContact(contactId, req.body);

    if (!result) {
     return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({
      Date: date(),
      contact: result,
    });
 
});

module.exports = putContact;
