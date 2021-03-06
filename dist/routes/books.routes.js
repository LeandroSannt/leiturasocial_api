"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var booksController_1 = require("../controllers/booksController");
var readPfdController_1 = require("../controllers/readPfdController");
var isAdmin_1 = require("../middlewares/isAdmin");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../config/upload"));
var upload = (0, multer_1.default)(upload_1.default);
var booksRouter = (0, express_1.default)();
var booksController = new booksController_1.BooksController();
var readController = new readPfdController_1.ReadController();
booksRouter.post('/', isAdmin_1.isAdmin, upload.fields([{ name: 'pdf', maxCount: 1 }, { name: 'photo', maxCount: 3 }]), booksController.post);
booksRouter.get('/read', isAdmin_1.isAdmin, readController.read);
booksRouter.put('/:id', upload.single('photo'), isAdmin_1.isAdmin, booksController.update);
booksRouter.delete('/:id', isAdmin_1.isAdmin, booksController.destroy);
booksRouter.get('/', booksController.list);
booksRouter.get('/mark', booksController.mark);
booksRouter.get('/:id', booksController.show);
exports.default = booksRouter;
