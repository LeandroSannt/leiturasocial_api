"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var categoriesController_1 = require("../controllers/categoriesController");
var categoriesRouter = (0, express_1.default)();
var categoriesController = new categoriesController_1.CategoriesController();
categoriesRouter.post('/', categoriesController.post);
categoriesRouter.get('/', categoriesController.list);
categoriesRouter.get('/findAll', categoriesController.findAll);
exports.default = categoriesRouter;
