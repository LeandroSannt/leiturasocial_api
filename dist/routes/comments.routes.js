"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var commentsController_1 = require("../controllers/commentsController");
var commentsRouter = (0, express_1.default)();
var commentsController = new commentsController_1.CommentsController();
commentsRouter.post('/', commentsController.post);
commentsRouter.get('/', commentsController.list);
exports.default = commentsRouter;
