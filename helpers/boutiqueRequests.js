const boutique = require("../services/boutiqueService");

// GET ALL BOUTIQUE RECORDS
module.exports.getAll = async function () {
  return await boutique.getBoutiques().then(function (response) {
    return response;
  });
};

// DELETE BOUTIQUE BY ID
module.exports.deleteById = async function (id) {
  return await boutique.deleteById(id).then(function (response) {
    return response;
  });
};

// ADD NEW
module.exports.addNew = async function (params) {
  return await boutique.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await boutique.updateByID(params).then(function (response) {
    return response;
  });
};
