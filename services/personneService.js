const axios = require("axios").default;
const config = require("config");

const token = config.get("jwt.token");

const instance = axios.create({
  timeout: 10000,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

// GET ALL
module.exports.getPersonne = async function () {
  try {
    const response = await instance.get(
      "http://localhost:8081/api/v1/shops/personne"
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
      "http://localhost:8081/api/v1/shops/personne/" + id
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
      "http://localhost:8081/api/v1/shops/personne/",
      {
        id: "",
        nom: req.body.nom,
        prenom: req.body.prenom,
        dateNaissance: req.body.dateNaissance,
        motDePasse: req.body.motDePasse,
        email: req.body.email,
        pays: req.body.pays,
        adresse_1: req.body.adresse_1,
        adresse_2: req.body.adresse_2,
        codePostal: req.body.codePostal,
        telephone: req.body.telephone,
        fix: req.body.fix,
        discriminant: req.body.discriminant,
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
      "http://localhost:8081/api/v1/shops/personne/" + req.body.idPersonne,
      {
        nom: req.body.nom,
        prenom: req.body.prenom,
        dateNaissance: req.body.dateNaissance,
        motDePasse: req.body.motDePasse,
        email: req.body.email,
        pays: req.body.pays,
        adresse_1: req.body.adresse_1,
        adresse_2: req.body.adresse_2,
        codePostal: req.body.codePostal,
        telephone: req.body.telephone,
        fix: req.body.fix,
        discriminant: req.body.fix,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
