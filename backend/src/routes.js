const express = require("express");

const routes = express.Router();
const LoginApi = require("./api/loginApi");

routes.post("/signup", LoginApi.create);
routes.post('/login', LoginApi.login)

module.exports = routes;