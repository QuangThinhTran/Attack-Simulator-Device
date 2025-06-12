const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", function (req, res, next) {
  try {
    res.render("index", {
      title: "InnovateTech - Tương lai bắt đầu từ đây",
    });
  } catch (error) {
    console.error("Error rendering index:", error);
    next(error);
  }
});

module.exports = router;
