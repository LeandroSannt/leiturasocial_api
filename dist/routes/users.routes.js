"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var ensuredAuthenticated_1 = require("../middlewares/ensuredAuthenticated");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../config/upload"));
var upload = (0, multer_1.default)(upload_1.default);
var UserRouter = (0, express_1.Router)();
var userController = new userController_1.UserController();
UserRouter.post('/', userController.post);
UserRouter.put('/', ensuredAuthenticated_1.ensuredAuthentication, upload.single('file'), userController.update);
UserRouter.delete('/:id', ensuredAuthenticated_1.ensuredAuthentication, userController.delete);
UserRouter.get('/', ensuredAuthenticated_1.ensuredAuthentication, userController.listAll);
exports.default = UserRouter;
