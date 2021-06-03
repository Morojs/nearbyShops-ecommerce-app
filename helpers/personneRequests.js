const personne = require("../services/personneService");

// GET ALL personne RECORDS
module.exports.getAll = async function () {
  return await personne.getPersonne().then(function (response) {
    return response;
  });
};

// DELETE personne BY ID
module.exports.deleteById = async function (id) {
  return await personne.deleteById(id).then(function (response) {
    return response;
  });
};
// ADD NEW
module.exports.addNew = async function (params) {
  return await personne.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await personne.updateByID(params).then(function (response) {
    return response;
  });
};
