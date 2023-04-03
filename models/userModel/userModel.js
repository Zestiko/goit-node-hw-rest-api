const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const usersShema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: String,
});

usersShema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // const passwordIsValid = await bcrypt.compare('Pass&2234', hashedPassword);

  next();
});

usersShema.methods.checkPassword = (candidate, hash) =>
  bcrypt.compare(candidate, hash);
const User = mongoose.model("users", usersShema);

module.exports = User;
