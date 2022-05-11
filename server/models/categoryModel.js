const mongoose = require("mongoose");
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  },
  {
    timestemps: true,
  }
);

const Category = new mongoose.model("category", categorySchema);
module.exports =  Category 
