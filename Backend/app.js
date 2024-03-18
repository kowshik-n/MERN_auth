const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(
    "mongodb+srv://kowshikprogrammer:MnPETj4PvOICcBGj@cluster0.d71tzpw.mongodb.net/authw?retryWrites=true&w=majority&appName=Cluster0"

    // "mongodb://127.0.0.1:27017"
  )
  .then(() => {
    app.listen(5000);
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
