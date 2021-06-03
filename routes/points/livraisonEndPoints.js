var express = require("express");
var router = express.Router();
const livraison = require("../../helpers/livraisonRequests");
// GET ALL
router.get("/admin/livraison", async function (req, res, next) {
  var instance = await livraison.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});

// ADD NEW
router.post("/admin/livraison/add", async function (req, res, next) {
  var instance = await livraison.addNew(req);
  res.redirect("back");
});

// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/livraison/:id", async function (req, res, next) {
  var instance = await livraison.deleteById(req.params.id);
  res.redirect("back");
});

// update
router.post("/admin/livraison/edit", async function (req, res, next) {
  var instance = await livraison.updateByID(req);
  res.redirect("back");
});

module.exports = router;
