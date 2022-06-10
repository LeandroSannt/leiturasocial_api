"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var following_users_1 = require("../controllers/following_users");
var followersRouter = (0, express_1.default)();
var followersController = new following_users_1.FollowersController();
followersRouter.post('/follow', followersController.post);
followersRouter.delete('/:user_id', followersController.unfollow);
followersRouter.get('/', followersController.list);
exports.default = followersRouter;
