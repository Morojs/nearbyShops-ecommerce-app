var express = require("express");
var router = express.Router();
const abonnement = require("../../helpers/personneRequests");

// GET ALL
router.get("/admin/personne", async function (req, res, next) {
  var instance = await personne.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});
// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/personne/:id", async function (req, res, next) {
  var instance = await personne.deleteById(req.params.id);
  res.redirect("back");
});

// ADD NEW
router.post("/admin/personne/add", async function (req, res, next) {
  var instance = await personne.addNew(req);
  res.redirect("back");
});
// update
router.post("/admin/personne/edit", async function (req, res, next) {
  var instance = await personne.updateByID(req);
  res.redirect("back");
});
module.exports = router;
