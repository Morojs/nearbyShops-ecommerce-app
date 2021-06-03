const localisation = require("../services/localisationService");

// GET ALL LIVRAISON RECORDS
module.exports.getAll = async function () {
  return await localisation.getLocalisation().then(function (response) {
    return response;
  });
};

// DELETE LIVRAISON BY ID
module.exports.deleteById = async function (id) {
  return await localisation.deleteById(id).then(function (response) {
    return response;
  });
};

// ADD NEW
module.exports.addNew = async function (params) {
  return await localisation.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await localisation.updateByID(params).then(function (response) {
    return response;
  });
};
