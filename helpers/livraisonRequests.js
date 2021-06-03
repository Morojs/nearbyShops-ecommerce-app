const livraison = require("../services/livraisonService");

// GET ALL LIVRAISON RECORDS
module.exports.getAll = async function () {
  return await livraison.getLivraison().then(function (response) {
    return response;
  });
};

// DELETE LIVRAISON BY ID
module.exports.deleteById = async function (id) {
  return await livraison.deleteById(id).then(function (response) {
    return response;
  });
};

// ADD NEW
module.exports.addNew = async function (params) {
  return await livraison.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await livraison.updateByID(params).then(function (response) {
    return response;
  });
};
