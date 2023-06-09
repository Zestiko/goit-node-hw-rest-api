const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

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
  avatarURL: String,
  
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
}
);

usersShema.pre("save", async function(next) {
  if (this.isNew) {
    const avatar = gravatar.url(
      `${this.email}`,
      { s: "100", r: "x", d: "wavatar" },
      true
    );
    this.avatarURL = avatar;
  //   const verificationToken = uuid()
  //   this.verificationToken = verificationToken;
  }

  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // const passwordIsValid = await bcrypt.compare('Pass&2234', hashedPassword);

  next();
});

usersShema.methods.checkPassword = (candidate, hash) =>
  bcrypt.compare(candidate, hash);

// usersShema.methods.generateVerificationToken = function() {
//   const token = uuid();
//   this.verificationToken = token;
//   console.log(this.verificationToken);
//   return token;
// }
const User = mongoose.model("users", usersShema);

module.exports = User;
