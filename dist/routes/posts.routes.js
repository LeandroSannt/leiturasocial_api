"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var postsController_1 = require("../controllers/postsController");
var postRouter = (0, express_1.default)();
var postController = new postsController_1.PostsController();
postRouter.post('/', postController.post);
postRouter.get('/', postController.list);
exports.default = postRouter;
