const axios = require("axios").default;

<<<<<<< HEAD
<<<<<<< HEAD
const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2MjI2NzEzOTksImlhdCI6MTYyMjY1MzM5OX0.yzll8R7qCe7cN3gNKYugVmj4ju5MlOA2JI3M2I5gtH9HNUyaSACsg3bzTQuIbkcs6GqKGsgmAhfSKAiS31fGuQ";
=======
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2MjI2NzEzOTksImlhdCI6MTYyMjY1MzM5OX0.yzll8R7qCe7cN3gNKYugVmj4ju5MlOA2JI3M2I5gtH9HNUyaSACsg3bzTQuIbkcs6GqKGsgmAhfSKAiS31fGuQ";
>>>>>>> a65aaaae66909820dea90b0248afd8a1052cf8b3
=======
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2MjI2NzEzOTksImlhdCI6MTYyMjY1MzM5OX0.yzll8R7qCe7cN3gNKYugVmj4ju5MlOA2JI3M2I5gtH9HNUyaSACsg3bzTQuIbkcs6GqKGsgmAhfSKAiS31fGuQ";
=======
const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2MjI2NzEzOTksImlhdCI6MTYyMjY1MzM5OX0.yzll8R7qCe7cN3gNKYugVmj4ju5MlOA2JI3M2I5gtH9HNUyaSACsg3bzTQuIbkcs6GqKGsgmAhfSKAiS31fGuQ";
>>>>>>> 5df46f91cbb1892e5c369c9bd101cb6a416c145b
>>>>>>> 84670d4e7ea178bed7027362f4ca794a29e5f4c6

const instance = axios.create({
  timeout: 10000,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

// GET ALL
module.exports.getFacture = async function () {
  try {
    const response = await instance.get(
      "http://localhost:8081/api/v1/shops/facture"
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
      "http://localhost:8081/api/v1/shops/facture/" + id
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
      "http://localhost:8081/api/v1/shops/facture/",
      {
        idFacture: "",
        dateFacture: req.body.dateFcture,
        montantFacture: req.body.montantFacture,
        idCommande: req.body.idCommande,
        idPayement: req.body.idPayement,
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
      "http://localhost:8081/api/v1/shops/facture/" + req.body.idFacture,
      {
<<<<<<< HEAD
        dateFacture: req.body.dateFcture,
=======
<<<<<<< HEAD
=======
        dateFacture: req.body.dateFcture,
>>>>>>> 5df46f91cbb1892e5c369c9bd101cb6a416c145b
>>>>>>> 84670d4e7ea178bed7027362f4ca794a29e5f4c6
        montantFacture: req.body.montantFacture,
        idCommande: req.body.idCommande,
        idPayement: req.body.idPayement,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
