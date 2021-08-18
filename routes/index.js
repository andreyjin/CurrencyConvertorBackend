var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getCurrency", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send({ data: { USD: 1, Euro: 1.2, CAD: 0.8 } });
});

module.exports = router;
