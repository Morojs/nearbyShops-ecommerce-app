var express = require("express");
var router = express.Router();
const facture = require("../../helpers/factureRequests");
// GET ALL
router.get("/admin/facture", async function (req, res, next) {
  var instance = await facture.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});

// ADD NEW
router.post("/admin/facture/add", async function (req, res, next) {
  var instance = await facture.addNew(req);
  res.redirect("back");
});

// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/facture/:id", async function (req, res, next) {
  var instance = await facture.deleteById(req.params.id);
  res.redirect("back");
});

// update
router.post("/admin/facture/edit", async function (req, res, next) {
  var instance = await facture.updateByID(req);
  res.redirect("back");
});

module.exports = router;
