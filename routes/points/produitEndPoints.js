var express = require("express");
var router = express.Router();
const produit = require("../../helpers/produitRequests");
// GET ALL
router.get("/admin/produit", async function (req, res, next) {
  var instance = await produit.getAll();
  res.render("index", {
    url: "admin/pages/produit/layout/produit",
    data: instance,
  });
});

// ADD NEW
router.post("/admin/produit/add", async function (req, res, next) {
  var instance = await produit.addNew(req);
  res.redirect("back");
});

// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/produit/:id", async function (req, res, next) {
  var instance = await produit.deleteById(req.params.id);
  res.redirect("back");
});

// update
router.post("/admin/produit/edit", async function (req, res, next) {
  var instance = await produit.updateByID(req);
  res.redirect("back");
});

module.exports = router;
