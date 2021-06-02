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
module.exports.getPayment = async function () {
  try {
    const response = await instance.get(
      "http://localhost:8081/api/v1/shops/payment"
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
      "http://localhost:8081/api/v1/shops/payment/" + id
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
      "http://localhost:8081/api/v1/shops/payment/",
      {
        idPayement: "",
        discriminant: req.body.discriminant,		
        datePayment: req.body.datePayment,
        nomSurCarte: req.body.nomSurCarte,
        numCarte: req.body.numCarte,
        dateExperation: req.body.dateExperation,
        cvv: req.body.cvv,
        type: req.body.type,
        numCash: req.body.numCash,
        nomLivreur: req.body.nomLivreur,		
        cinClient: req.body.cinClient,	
        dateLivraison: req.body.dateLivraison,	
        montant: req.body.montant,	
        idPersonne: req.body.idPersonne,
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
      "http://localhost:8081/api/v1/shops/payment/" + req.body.idPayment,
      {
        discriminant: req.body.discriminant,		
        datePayment: req.body.datePayment,
        nomSurCarte: req.body.nomSurCarte,
        numCarte: req.body.numCarte,
        dateExperation: req.body.dateExperation,
        cvv: req.body.cvv,
        type: req.body.type,
        numCash: req.body.numCash,
        nomLivreur: req.body.nomLivreur,		
        cinClient: req.body.cinClient,	
        dateLivraison: req.body.dateLivraison,	
        montant: req.body.montant,	
        idPersonne: req.body.idPersonne,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
