const ville = require("../services/villeService");

// GET ALL ville RECORDS
module.exports.getAll = async function () {
  return await ville.getVille().then(function (response) {
    return response;
  });
};

// DELETE ville BY ID
module.exports.deleteById = async function (id) {
  return await ville.deleteById(id).then(function (response) {
    return response;
  });
};
// ADD NEW
module.exports.addNew = async function (params) {
  return await ville.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await ville.updateByID(params).then(function (response) {
    return response;
  });
};
