"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var publicationsController_1 = require("../controllers/publicationsController");
var publicationsRouter = (0, express_1.default)();
var commentsController = new publicationsController_1.PublicationsController();
publicationsRouter.get('/', commentsController.list);
exports.default = publicationsRouter;
