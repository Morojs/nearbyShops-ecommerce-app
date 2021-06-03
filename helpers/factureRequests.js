const facture = require("../services/factureService");

// GET ALL FACTURE RECORDS
module.exports.getAll = async function () {
  return await facture.getFacture().then(function (response) {
    return response;
  });
};

// DELETE FACTURE BY ID
module.exports.deleteById = async function (id) {
  return await facture.deleteById(id).then(function (response) {
    return response;
  });
};

// ADD NEW
module.exports.addNew = async function (params) {
  return await facture.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await facture.updateByID(params).then(function (response) {
    return response;
  });
};
