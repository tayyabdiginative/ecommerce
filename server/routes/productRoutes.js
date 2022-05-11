const express = require("express");
const { createProduct,updateProduct,daleteProduct,allProducts } = require("../controller/productControler");
const { protect } = require("../middleware/authMidleware");
const router = express.Router();

router.route("/createproduct").post(protect, createProduct);
router.route("/update/:id").put(protect, updateProduct);
router.route("/delete/:id").delete(protect, daleteProduct);
router.route("/list").get(protect, allProducts);
module.exports = router;
