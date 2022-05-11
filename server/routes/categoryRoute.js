const express = require("express");
const {
  createCategory,
  updateCategory,
  daleteCategory,
} = require("../controller/categorycontroler");
const { protect } = require("../middleware/authMidleware");
const router = express.Router();

router.route("/createcategory").post(protect, createCategory);
router.route("/update/:id").put(protect, updateCategory);
router.route("/delete/:id").delete(protect, daleteCategory);
module.exports = router;
