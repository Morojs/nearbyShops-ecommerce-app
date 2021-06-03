var express = require("express");
var router = express.Router();
const commande = require("../../helpers/commandeRequests");

// GET ALL
router.get("/admin/commande", async function (req, res, next) {
  var instance = await commande.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});

// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/commande/:id", async function (req, res, next) {
  var instance = await commande.deleteById(req.params.id);
  res.redirect("back");
});

// ADD NEW
router.post("/admin/commande/add", async function (req, res, next) {
  var instance = await commande.addNew(req);
  res.redirect("back");
});
// update
router.post("/admin/commande/edit", async function (req, res, next) {
  var instance = await commande.updateByID(req);
  res.redirect("back");
});
module.exports = router;
