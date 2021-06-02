const axios = require("axios").default;

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2MjI2NzU2MTcsImlhdCI6MTYyMjY1NzYxN30.xRExXKeY_-wak1JT7utnoTvBGQsBQ-PE79LkW0nl60r9s3-1JRGePR2Oshucm2W0iVwyMoA1sbc_iqJATi0gEQ";

const instance = axios.create({
  timeout: 10000,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

// GET ALL
module.exports.getVille = async function () {
  try {
    const response = await instance.get(
      "http://localhost:8081/api/v1/shops/ville"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
//DELETE BY ID
module.exports.deleteById = async function (id) {
  try {
    const response = await instance.delete(
      "http://localhost:8081/api/v1/shops/ville/" + id
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

// Add New
module.exports.addNew = async function (req) {
  try {
    const response = await instance.post(
      "http://localhost:8081/api/v1/shops/ville/",
      {
        id: "",
        nomVille: req.body.nomVille,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

//UPDATE
module.exports.updateByID = async function (req) {
  try {
    const response = await instance.put(
      "http://localhost:8081/api/v1/shops/ville/" + req.body.idVille,
      {
        nomVille: req.body.nomVille,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
