const express = require("express");
const { registerUser, authuser,deleteUser } = require("../controller/userController");
// const { protect } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authuser);
router.route("/:id").delete(deleteUser);
// router.post("/login", authuser);
// router.route("/profile").post(protect,updateUserProfile)
// router.route("/api/login").post(authuser);

module.exports = router;
