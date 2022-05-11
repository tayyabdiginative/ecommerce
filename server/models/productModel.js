const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    quality: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    description: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
  },
  {
    timestemps: true,
  }
);

const Product = new mongoose.model("product", productSchema);
module.exports = Product;
