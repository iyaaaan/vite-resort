// import express
import express from "express";

// import functions from Controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

// initialize express router
const router = express.Router();

// get all products
router.get("/products", showProducts);

// get a single product
router.get("/products/:id", showProductById);

// create a new product
router.post("/products", createProduct);

// update a product
router.put("/products/:id", updateProduct);

// delete a product
router.delete("/products/:id", deleteProduct);

// export router
export default router;
