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
module.exports.getProduit = async function () {
  try {
    const response = await instance.get(
      "http://localhost:8081/api/v1/shops/produit"
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
      "http://localhost:8081/api/v1/shops/produit/" + id
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
      "http://localhost:8081/api/v1/shops/produit/",
      {
        idProduit: "",
        nom: req.body.nom,
        reference: req.body.reference,
        description: req.body.description,
        prix: req.body.prix,
        qteStock: req.body.qteStock,
        idBoutique: req.body.idBoutique,
        id: req.body.idCategorie,
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
      "http://localhost:8081/api/v1/shops/produit/" + req.body.idProduit,
      {
        nom: req.body.nom,
        reference: req.body.reference,
        description: req.body.description,
        prix: req.body.prix,
        qteStock: req.body.qteStock,
        idBoutique: req.body.idBoutique,
        id: req.body.idCategorie,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
