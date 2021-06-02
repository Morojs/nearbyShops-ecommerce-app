const categorie = require("../services/categorieService");

// GET ALL CATEGORIE RECORDS
module.exports.getAll = async function () {
  return await categorie.getCategorie().then(function (response) {
    return response;
  });
};

// DELETE CATEGORIE BY ID
module.exports.deleteById = async function (id) {
  return await categorie.deleteById(id).then(function (response) {
    return response;
  });
};
// ADD NEW
module.exports.addNew = async function (params) {
  return await categorie.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await categorie.updateByID(params).then(function (response) {
    return response;
  });
};
