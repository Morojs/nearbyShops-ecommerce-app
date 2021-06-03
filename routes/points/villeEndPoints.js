var express = require("express");
var router = express.Router();
const ville = require("../../helpers/villeRequests");

// GET ALL
router.get("/admin/ville", async function (req, res, next) {
  var instance = await ville.getAll();
  res.render("index", {
    url: "",
    data: instance,
  });
});
// DELETE BY ID : DELETE METHOD BELOW IT'S NOT SECURE YET
router.get("/admin/ville/:id", async function (req, res, next) {
  var instance = await ville.deleteById(req.params.id);
  res.redirect("back");
});

// ADD NEW
router.post("/admin/ville/add", async function (req, res, next) {
  var instance = await ville.addNew(req);
  res.redirect("back");
});
// update
router.post("/admin/ville/edit", async function (req, res, next) {
  var instance = await ville.updateByID(req);
  res.redirect("back");
});
module.exports = router;
