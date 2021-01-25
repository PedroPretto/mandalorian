const express = require("express");

const routes = express.Router();
const AccountController = require("./controllers/AccountControllers");

routes.post("/signup", AccountController.create);
routes.get('/', AccountController.list)

module.exports = routes;