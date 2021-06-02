const abonnement = require("../services/abonnementService");

// GET ALL ABONNEMENT RECORDS
module.exports.getAll = async function () {
  return await abonnement.getAbonnement().then(function (response) {
    return response;
  });
};

// DELETE ABONNEMENT BY ID
module.exports.deleteById = async function (id) {
  return await abonnement.deleteById(id).then(function (response) {
    return response;
  });
};
// ADD NEW
module.exports.addNew = async function (params) {
  return await abonnement.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await abonnement.updateByID(params).then(function (response) {
    return response;
  });
};
