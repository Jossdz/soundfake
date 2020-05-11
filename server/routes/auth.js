const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    passReqToCallback: true,
  }),
  (req, res) => {
    const { _id, email } = req.user;
    res.status(200).json({ user: { _id, email } });
  }
);

router.post("/signup", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) return res.json({ msg: "User already exist" });

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  const { _id, email: userEmail } = await User.create({
    email,
    password: hashPass,
  });

  res.status(201).json({ msg: "User created", user: { _id, userEmail } });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out" });
});

router.get("/currentUser", (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
