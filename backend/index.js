
// require("dotenv").config();

// const express = require("express");

// const cors = require("cors");
// const connectDB = require("./config/db");
// const compression = require("compression");
// const cookieParser = require("cookie-parser");




// const app = express();

// // Database
// connectDB();

// // Middlewares
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(compression());

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/categories", require("./routes/categoryRoutes"));
// app.use("/api/banners", require("./routes/bannerRoutes")); 
// app.use("/api/cart", require("./routes/cartRoutes"));
// app.use("/api/payment",require("./routes/paymentRoutes"));

// // Test Route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Welcome to SERINA Boutique API",
//   });
// });

// const PORT = process.env.PORT || 3000;







// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
//---------------------------------------------------------------------------------

// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const compression = require("compression");
// const cookieParser = require("cookie-parser");

// const connectDB = require("./config/db");


// const app = express();

// // Database
// //connectDB();



// // Database
// connectDB();

// // Middlewares
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// // app.use(
// //   cors({
// //     origin: "https://online-shop-gold-eight.vercel.app",
// //     credentials: true,
// //   })
// // );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(compression());

// // Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/categories", require("./routes/categoryRoutes"));
// app.use("/api/banners", require("./routes/bannerRoutes"));
// app.use("/api/cart", require("./routes/cartRoutes"));
// app.use("/api/payment", require("./routes/paymentRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/variants", require("./routes/variantRoutes"));
// // Test Route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Welcome to SERINA Boutique API",
//   });
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
//--------------------
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const app = express();

// Database
connectDB();

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://online-shop-gold-eight.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/banners", require("./routes/bannerRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/variants", require("./routes/variantRoutes"));

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to SERINA Boutique API",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});