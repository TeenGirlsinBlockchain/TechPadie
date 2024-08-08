const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const BaseController = require("./base");


class UserController extends BaseController {
  constructor() {
    super();
  }

}

module.exports = UserController;
