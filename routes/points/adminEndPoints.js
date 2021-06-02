var express = require("express");
var router = express.Router();
router.get("/admin", function (req, res, next) {
  res.render("index", {
    title: "null",
  });
});
module.exports = router;
