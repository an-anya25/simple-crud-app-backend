const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
const productRoutes = require("./routes/product.route.js");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("hello from Node API");
});

mongoose
  .connect(
    "mongodb+srv://ananya:0PSlE1HnT9GDMj3n@backenddb.9x3nsgr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connection to db successful");

    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection to db failed");
  });
