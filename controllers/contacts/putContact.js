const { updateContact } = require("../../models/contacts");

const { date, validateJoi, catchAsync } = require("../../utils");

const putContact = catchAsync(async (req, res, next) => {
  
    const { contactId } = req.params;
    const requesBodyLength = Object.keys(req.body).length;

    if (requesBodyLength < 1) {
     return res.status(400).json({ message: "missing fields" });
    }

   const validateResul = validateJoi(req.body);

   if (validateResul.error) {
     return res.status(400).json({
       Date: date(),
       status: validateResul.error.details
     });
   }
   
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
