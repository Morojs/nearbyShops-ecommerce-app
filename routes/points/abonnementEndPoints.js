var express = require("express");
var router = express.Router();
const abonnement = require("../../helpers/abonnementRequests");

// GET ALL
router.get("/admin/abonnement", async function (req, res, next) {
  var instance = await abonnement.getAll();
  res.render("index", {
    url: "admin/pages/abonnement/layout/planAbonnement",
    data: instance,
  });
});
// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/abonnement/:id", async function (req, res, next) {
  var instance = await abonnement.deleteById(req.params.id);
  res.redirect("back");
});

// ADD NEW
router.post("/admin/abonnement/add", async function (req, res, next) {
  var instance = await abonnement.addNew(req);
  res.redirect("back");
});
// update
router.post("/admin/abonnement/edit", async function (req, res, next) {
  var instance = await abonnement.updateByID(req);
  res.redirect("back");
});
module.exports = router;
