"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var session_routes_1 = __importDefault(require("./session.routes"));
var users_routes_1 = __importDefault(require("./users.routes"));
var posts_routes_1 = __importDefault(require("./posts.routes"));
var comments_routes_1 = __importDefault(require("./comments.routes"));
var publications_routes_1 = __importDefault(require("./publications.routes"));
var following_user_routes_1 = __importDefault(require("./following_user.routes"));
var books_routes_1 = __importDefault(require("./books.routes"));
var categories_routes_1 = __importDefault(require("./categories.routes"));
var ensuredAuthenticated_1 = require("../middlewares/ensuredAuthenticated");
//middlewares
var routes = (0, express_1.Router)();
routes.use('/session', session_routes_1.default);
routes.use('/user', users_routes_1.default);
routes.use('/posts', ensuredAuthenticated_1.ensuredAuthentication, posts_routes_1.default);
routes.use('/comments', ensuredAuthenticated_1.ensuredAuthentication, comments_routes_1.default);
routes.use('/publications', ensuredAuthenticated_1.ensuredAuthentication, publications_routes_1.default);
routes.use('/follower', ensuredAuthenticated_1.ensuredAuthentication, following_user_routes_1.default);
routes.use('/categories', ensuredAuthenticated_1.ensuredAuthentication, categories_routes_1.default);
routes.use('/books', ensuredAuthenticated_1.ensuredAuthentication, books_routes_1.default);
exports.default = routes;
