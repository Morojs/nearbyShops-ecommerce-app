var express = require("express");
var router = express.Router();
const payment = require("../../helpers/paymentRequests");

// GET ALL
router.get("/admin/payment", async function (req, res, next) {
  var instance = await payment.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});
// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/payment/:id", async function (req, res, next) {
  var instance = await payment.deleteById(req.params.id);
  res.redirect("back");
});

// ADD NEW
router.post("/admin/payment/add", async function (req, res, next) {
  var instance = await payment.addNew(req);
  res.redirect("back");
});
// update
router.post("/admin/payment/edit", async function (req, res, next) {
  var instance = await payment.updateByID(req);
  res.redirect("back");
});
module.exports = router;
