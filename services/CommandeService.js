const axios = require("axios").default;

const token = "";

const instance = axios.create({
  timeout: 10000,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

// GET ALL
module.exports.getCommande = async function () {
  try {
    const response = await instance.get(
      "http://localhost:8081/api/v1/shops/commande"
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
      "http://localhost:8081/api/v1/shops/commande/" + id
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
      "http://localhost:8081/api/v1/shops/commande/",
      {
        idCommande: "",
        dateCommande: req.body.dateCommande,
        etatCommande: req.body.etatCommande,
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
      "http://localhost:8081/api/v1/shops/commande/" + req.body.idCommande,
      {
        dateCommande: req.body.dateCommande,
        etatCommande: req.body.etatCommande,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
