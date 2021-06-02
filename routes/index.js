var express = require("express");
var router = express.Router();

/* GET ADMIN PAGE */
router.use("/", require("./points/adminEndPoints"));
/*  GET ABONNEMENT PAGE */
router.use("/", require("./points/abonnementEndPoints"));
/* GET CATEGORIE */
router.use("/", require("./points/categorieEndPoints"));

module.exports = router;
