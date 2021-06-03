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
module.exports.getLocalisation = async function () {
  try {
    const response = await instance.get(
      "http://localhost:8081/api/v1/shops/localisation"
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
      "http://localhost:8081/api/v1/shops/localisation/" + id
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
      "http://localhost:8081/api/v1/shops/localisation/",
      {
        id: "",
        altitude: req.body.altitude,
        langitude: req.body.langitude,
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
      "http://localhost:8081/api/v1/shops/localisation/" + req.body.id,
      {
        altitude: req.body.altitude,
        langitude: req.body.langitude,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
