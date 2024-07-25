const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.contoller.js");

//display all product
router.get("/", getProducts);

//display a product by id
router.get("/:id", getProduct);

//add a product
router.post("/", addProduct);

//update a product by id
router.put("/:id", updateProduct);

//delete a product by id
router.delete("/:id", deleteProduct);

module.exports = router;
