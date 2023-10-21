const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { require: true, type: String },
  password: { require: true, type: String },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
