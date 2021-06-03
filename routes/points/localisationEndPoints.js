var express = require("express");
var router = express.Router();
const localisation = require("../../helpers/localisationRequests");
// GET ALL
router.get("/admin/localisation", async function (req, res, next) {
  var instance = await localisation.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});

// ADD NEW
router.post("/admin/localisation/add", async function (req, res, next) {
  var instance = await localisation.addNew(req);
  res.redirect("back");
});

// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/localisation/:id", async function (req, res, next) {
  var instance = await localisation.deleteById(req.params.id);
  res.redirect("back");
});

// update
router.post("/admin/localisation/edit", async function (req, res, next) {
  var instance = await localisation.updateByID(req);
  res.redirect("back");
});

module.exports = router;
