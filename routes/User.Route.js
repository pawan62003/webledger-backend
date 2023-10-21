const express = require("express");
const { UserModel } = require("../model/User.model");
const jwt = require("jsonwebtoken");

const UserRoute = express.Router();

UserRoute.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new UserModel({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "User registration failed" });
  }
});

UserRoute.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.json({ message: "Please register your account" });
    }
    if (user.password !== password) {
      return res.json({ message: "Please enter your correct password" });
    }
    const token = jwt.sign({ userId: user._id }, "pawan_kumar");
    res.status(200).json({ token, message: "Login successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {
  UserRoute,
};
