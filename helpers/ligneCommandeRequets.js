const ligneCommande = require("../services/ligneCommandeService");

// GET ALL LIGNE COMMANDES RECORDS
module.exports.getAll = async function () {
  return await ligneCommande.getLigneCommandes().then(function (response) {
    return response;
  });
};

// DELETE LIGNE COMMANDES BY ID
module.exports.deleteById = async function (id) {
  return await ligneCommande.deleteById(id).then(function (response) {
    return response;
  });
};

// ADD NEW
module.exports.addNew = async function (params) {
  return await ligneCommande.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await ligneCommande.updateByID(params).then(function (response) {
    return response;
  });
};
