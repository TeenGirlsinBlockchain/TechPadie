const express = require("express");
const UserController = require("../controller/user");
const useCatchErrors = require("../error/catchErrors");

class UserRoute {
  router = express.Router();
  userController = new UserController();
  path = "/user";

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    //Routes Pertaining to Users would be Initialized here👇 
  }
}

module.exports = UserRoute;
