import express from "express";
import { products } from "../controllers/product.controller.js";
// import { products } from "../controllers/product.controller";

const router = express.Router();

// forma larga 
// http://localhost:3000/products
// router.get("/", (req, res) => {
//   // res.send("Hello World!");
//   res.status(200).json({
//     success: true,
//     data: [
//       {
//         subject: "programación v",
//         description: "this is my first api",
//         hour: "20:00pm",
//         semester: "7",
//         date: new Date().toDateString(),
//       },
//     ],
//   });
// });

// forma corta 
router.get("/", products)
export default router;
