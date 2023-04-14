const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  patchUserSubscription,
  patchUserAvatar,
} = require("../../controllers/users");
const {
  validateUserRegister,
  validateUserlogin,
  validateUserToken,
  validateUserSubscription,
  uploadUserPhoto,
} = require("../../middleware/validateUsers");


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

router.patch("/avatars", validateUserToken, uploadUserPhoto, patchUserAvatar);

module.exports = router;
