const produit = require("../services/produitService");

// GET ALL PRODUIT RECORDS
module.exports.getAll = async function () {
  return await produit.getProduit().then(function (response) {
    return response;
  });
};

// DELETE PRODUIT BY ID
module.exports.deleteById = async function (id) {
  return await produit.deleteById(id).then(function (response) {
    return response;
  });
};
// ADD NEW
module.exports.addNew = async function (params) {
  return await produit.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await produit.updateByID(params).then(function (response) {
    return response;
  });
};
