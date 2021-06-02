var express = require("express");
var router = express.Router();
const categorie = require("../../helpers/categorieRequests");
// GET ALL
router.get("/admin/categorie", async function (req, res, next) {
  var instance = await categorie.getAll();
  res.render("index", {
    url: "admin/pages/produit/layout/categorie",
    data: instance,
  });
});

// ADD NEW
router.post("/admin/categorie/add", async function (req, res, next) {
  var instance = await categorie.addNew(req);
  res.redirect("back");
});

// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/categorie/:id", async function (req, res, next) {
  var instance = await categorie.deleteById(req.params.id);
  res.redirect("back");
});

// update
router.post("/admin/categorie/edit", async function (req, res, next) {
  var instance = await categorie.updateByID(req);
  res.redirect("back");
});

module.exports = router;
