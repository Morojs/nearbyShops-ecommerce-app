const payment = require("../services/paymentService");

// GET ALL payment RECORDS
module.exports.getAll = async function () {
  return await payment.getPayment().then(function (response) {
    return response;
  });
};

// DELETE payment BY ID
module.exports.deleteById = async function (id) {
  return await payment.deleteById(id).then(function (response) {
    return response;
  });
};
// ADD NEW
module.exports.addNew = async function (params) {
  return await payment.addNew(params).then(function (response) {
    return response;
  });
};

// UPDATE
module.exports.updateByID = async function (params) {
  return await payment.updateByID(params).then(function (response) {
    return response;
  });
};
