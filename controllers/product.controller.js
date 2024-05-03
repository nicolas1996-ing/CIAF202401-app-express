export const products = (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      {
        subject: "programación v",
        description: "this is my first api",
        hour: "20:00pm",
        semester: "7",
        date: new Date().toDateString(),
      },
    ],
  });
};

// export const products = (req, res) => {
//   try {
//     res.status(200).json({
//       success: true,
//       data: [
//         {
//           subject: "programación v",
//           semester: "7",
//           date: new Date().toDateString(),
//         },
//       ],
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: "product.controller.get.products",
//     });
//   }
// };

// import Product from "../models/product.model.js";

// export const products = async (req, res) => {
//   try {
//     const products = await Product.findAll();
//     res.status(200).json({
//       success: true,
//       data: products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       error: "product.controller.get.products",
//     });
//   }
// };
