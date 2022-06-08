const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    success: true,
    msg: "success",
  });
});

router.delete("/", (req, res) => {
  res.json({
    success: true,
    msg: "success",
  });
});

module.exports = router;
