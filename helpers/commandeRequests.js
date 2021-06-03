const commande = require("../services/commandeService");

// GET ALL COMMANDE RECORDS
module.exports.getAll = async function () {
  return await commande.getCommande().then(function (response) {
    return response;
  });
};

// DELETE COMMANDE BY ID
module.exports.deleteById = async function (id) {
  return await commande.deleteById(id).then(function (response) {
    return response;
  });
};

// ADD NEW
module.exports.addNew = async function (params) {
  return await commande.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await commande.updateByID(params).then(function (response) {
    return response;
  });
};
