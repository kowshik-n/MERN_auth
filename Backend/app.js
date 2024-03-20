const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend origin
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(
    ""

    // "mongodb://127.0.0.1:27017"
  )
  .then(() => {
    app.listen(5000);
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
