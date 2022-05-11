const express = require("express");
const { createProduct } = require("../controller/productControler");
const router = express.Router();

router.route("/createproduct").post(createProduct);
module.exports = router;
