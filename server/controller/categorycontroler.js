const asynchancler = require("express-async-handler");
const Category = require("../models/categoryModel");

const createCategory = asynchancler(async (req, res) => {
  const { name, description } = req.body;
  console.log(name, description);
  if (!name || !description) {
    res.send({ message: "Please Fill All the above fields" });
  } else {
    const category = new Category({
      name,
      description,
    });
    const createCategory = category.save();
    res.json(createCategory);
  }
});

const updateCategory = asynchancler(async (req, res) => {
  const data = await Category.findById(req.params.id);
  const { name, description } = req.body;
  if (data) {
    (data.name = name), (data.description = description);
    const categoryUpdate = await data.save();
    res.json(categoryUpdate);
  } else {
    res.send({
      message: "Category not Updated",
    });
  }
});

const daleteCategory = asynchancler(async (req, res) => {
  const data = await Category.findById(req.params.id);
  //   if (data.user.toString() !== data.user._id.toString()) {
  //     res.send({
  //       message: "You Can not perform this action",
  //     });
  //   }
  if (data) {
    await data.remove();
    res.send({
      message: "Categiry is removed",
    });
  } else {
    res.send({
      message: "Categiry is not removed",
    });
  }
});
module.exports = { createCategory, updateCategory, daleteCategory };
