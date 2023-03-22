const { addContact } = require("../../models/contacts");
const { date, validateJoi, catchAsync } = require("../../utils");


const postContact = catchAsync(async (req, res, next) => {
  
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
     return  res.status(400).json({
       message: "missing required name field",
     });
    } else {
     
      const validateResul = validateJoi(req.body);

      if (validateResul.error) {
        return res.status(400).json({ status: validateResul.error.details });
      }
      const contact = await addContact(name, email, phone);
       return res.status(201).json({
         Date: date(),
         contact,
       });
    }

});

module.exports = postContact;
