var express = require("express");
var router = express.Router();
const boutique = require("../../helpers/boutiqueRequests");

// GET ALL
router.get("/admin/boutique", async function (req, res, next) {
  var instance = await boutique.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});

// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/boutique/:id", async function (req, res, next) {
  var instance = await boutique.deleteById(req.params.id);
  res.redirect("back");
});

// ADD NEW
router.post("/admin/boutique/add", async function (req, res, next) {
  var instance = await boutique.addNew(req);
  res.redirect("back");
});

// update
router.post("/admin/boutique/edit", async function (req, res, next) {
  var instance = await boutique.updateByID(req);
  res.redirect("back");
});

module.exports = router;
