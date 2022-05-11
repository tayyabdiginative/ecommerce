const express = require("express");
const {
  registerUser,
  authuser,
  deleteUser,
  updateUser,
} = require("../controller/userController");
const { protect } = require("../middleware/authMidleware");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authuser);
router.route("/:id").delete(protect, deleteUser);
router.route("/update/:id").put(protect, updateUser);

module.exports = router;
