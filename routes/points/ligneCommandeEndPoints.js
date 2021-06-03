var express = require("express");
var router = express.Router();
const ligneCommande = require("../../helpers/ligneCommandeRequets");

// GET ALL
router.get("/admin/commande", async function (req, res, next) {
  var instance = await ligneCommande.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});

// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/ligneCommande/:id", async function (req, res, next) {
  var instance = await ligneCommande.deleteById(req.params.id);
  res.redirect("back");
});

// ADD NEW
router.post("/admin/ligneCommande/add", async function (req, res, next) {
  var instance = await ligneCommande.addNew(req);
  res.redirect("back");
});

// update
router.post("/admin/ligneCommande/edit", async function (req, res, next) {
  var instance = await ligneCommande.updateByID(req);
  res.redirect("back");
});
module.exports = router;
