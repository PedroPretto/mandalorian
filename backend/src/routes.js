const express = require("express");

const routes = express.Router();
const AccountController = require("./controllers/AccountControllers");

routes.post("/signup", AccountController.create);
routes.post('/login', AccountController.login)

module.exports = routes;