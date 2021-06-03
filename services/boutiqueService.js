const axios = require("axios").default;
const config = require("config");

const token = config.get("jwt.token");

const instance = axios.create({
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

// GET ALL
module.exports.getBoutiques = async function () {
  try {
    const response = await instance.get(
      "http://localhost:8081/api/v1/shops/boutique"
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
      "http://localhost:8081/api/v1/shops/boutique/" + id
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
      "http://localhost:8081/api/v1/shops/boutique/",
      {
        idBoutique: "",
        nomBoutique: req.body.nomBoutique,
        description: req.body.description,
        adresseBoutique: req.body.adresseBoutique,
        siteWeb: req.body.siteWeb,
        dateCreation: req.body.dateCreation,
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
      "http://localhost:8081/api/v1/shops/boutique/" + req.body.idBoutique,
      {
        nomBoutique: req.body.nomBoutique,
        description: req.body.description,
        adresseBoutique: req.body.adresseBoutique,
        siteWeb: req.body.siteWeb,
        dateCreation: req.body.dateCreation,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
