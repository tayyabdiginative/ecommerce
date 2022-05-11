const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const mongooseDB = require("./config/config");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoute");
const app = express();
dotEnv.config();
app.use(cors());
app.use(express.json());
mongooseDB();
app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Api is Running");
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => console.log(`server is running at ${PORT}`));
