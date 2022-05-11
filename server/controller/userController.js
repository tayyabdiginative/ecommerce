const asynchancler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utills/generateToken");

const registerUser = asynchancler(async (req, res) => {
  const { name, email, password, pic, isActive, isAdmin } = req.body;
  const userExit = await User.findOne({ email });
  if (userExit) {
    res.send({
      message: "User Already Exist",
    });
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
    isActive,
    isAdmin,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isActive: user.isActive,
      pic: user.pic,
      isAdmin: user.isAdmin,
    });
  } else {
    res.send({
      message: "Error Accured",
    });
  }
});

const authuser = asynchancler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isActive: user.isActive,
      pic: user.pic,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email and Password");
  }
});
const deleteUser = asynchancler(async (req, res) => {
  const data = await User.findById(req.params.id);
  console.log(data,'adata1')
  console.log(data.user,'adata2')
  console.log(data.user._id,'adata3')
  if (data.user.toString() !== data.user._id.toString()) {
    res.send({
      message: "You Can not perform this action",
    });
  }
  if (data) {
    await data.remove();
    res.json({
      message: "You Can not perform this action",
    });
  } else {
    res.send({
      message: "Note not Found",
    });
  }
});

module.exports = { registerUser, authuser, deleteUser };
