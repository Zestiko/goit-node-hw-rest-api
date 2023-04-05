const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  patchUserSubscription,
} = require("../../controllers/users");
const { validateUserRegister, validateUserlogin, validateUserToken, validateUserSubscription } = require("../../middleware/validateUsers");

const router = express.Router();



router.post("/register", validateUserRegister, registerUser);

router.post("/login", validateUserlogin, loginUser);

router.post("/logout", validateUserToken, logoutUser);

router.get("/current", validateUserToken, currentUser);

router.patch(
  "/",
  validateUserToken,
  validateUserSubscription,
  patchUserSubscription
);


module.exports = router;
