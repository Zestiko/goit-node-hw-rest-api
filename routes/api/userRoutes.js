const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  patchUserSubscription,
  patchUserAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/users");

const {
  validateUserRegister,
  validateUserlogin,
  validateUserToken,
  validateUserSubscription,
  uploadUserPhoto,
  validateUserEmail,
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

router.get("/verify/:verificationToken", verifyEmail);

router.post("/verify", validateUserEmail, resendVerifyEmail);

module.exports = router;
