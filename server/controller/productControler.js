const asynchancler = require("express-async-handler");
const Product = require("../models/productModel");

const createProduct = asynchancler(async (req, res) => {
  const { name, brand, price, quality, image, description } = req.body;
  console.log(req.body, "sdfsdfsdfsdfsd");
  console.log(req.body.user, "s");
  if (!name || !brand || !price || !quality || !description) {
    res.send({ message: "Please Fill All the above fields" });
  } else {
    const product = new Product({
      user: req.user._id,
      name,
      brand,
      price,
      quality,
      image,
      description,
    });
    const createPorduct = product.save();
    res.status(201).json(createPorduct);
  }
});

module.exports = { createProduct };
