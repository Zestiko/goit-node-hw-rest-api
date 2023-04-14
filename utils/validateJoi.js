const Joi = require("joi");
const PASSWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;
const validateJoi = (requesBody) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(10),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: true },
    }),
    phone: Joi.string().min(6).max(12),
    favorite: Joi.boolean(),
  }).options({ abortEarly: false });
  const validateResul = schema.validate(requesBody);
  return validateResul;
};

const validateJoiFavorite = (reqBody) => {
  const schema = Joi.object({
    favorite: Joi.boolean(),
  }).options({ abortEarly: false });
  const validateResul = schema.validate(reqBody);
  return validateResul;
};

const validateJoiUserRegister = (reqBody) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: true },
      })
      .required(),
    password: Joi.string().min(2).max(30).required().regex(PASSWD_REGEX),
  }).options({ abortEarly: false });
  const validateResul = schema.validate(reqBody);
  return validateResul;
};

const validateJoiUserSubscription = (reqBody) => {
  const schema = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business").required(),
  }).options({ abortEarly: false });
  const validateResul = schema.validate(reqBody);
  return validateResul;
};


module.exports = {
  validateJoi,
  validateJoiFavorite,
  validateJoiUserRegister,
  validateJoiUserSubscription,

};
