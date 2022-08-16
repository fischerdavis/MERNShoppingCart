const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

//@desc GET all products from DB.
//@route GET /api/products
//@access Public
router.get("/", getProducts);

//@desc GET a product by id from DB.
//@route GET /api/product/:id
//@access Public
router.get("/:id", getProductById);

module.exports = router;