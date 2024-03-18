const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  verifyToken,
  getUser,
} = require("../controller/user-controller");

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
// router.get("/", (req, res, next) => {
//   res.send("Hello World");
// });

module.exports = router;
