"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
var booksServices_1 = require("../services/books/booksServices");
var BooksController = /** @class */ (function () {
    function BooksController() {
    }
    BooksController.prototype.post = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, photo, category_id, pdfBook, sinopse, booksServices, category;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, photo = _a.photo, category_id = _a.category_id, pdfBook = _a.pdfBook, sinopse = _a.sinopse;
                        booksServices = new booksServices_1.BooksServices();
                        return [4 /*yield*/, booksServices.create({
                                category_id: category_id,
                                photo: request.files['photo'][0].filename,
                                pdfBook: request.files['pdf'][0].path,
                                sinopse: sinopse
                            })];
                    case 1:
                        category = _b.sent();
                        return [2 /*return*/, response.json(category)];
                }
            });
        });
    };
    BooksController.prototype.list = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var booksServices, _a, category_id, title, books;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        booksServices = new booksServices_1.BooksServices();
                        _a = request.query, category_id = _a.category_id, title = _a.title;
                        return [4 /*yield*/, booksServices.list(category_id, title)];
                    case 1:
                        books = _b.sent();
                        return [2 /*return*/, response.json(books)];
                }
            });
        });
    };
    BooksController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var booksServices, id, book;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        booksServices = new booksServices_1.BooksServices();
                        id = request.params.id;
                        return [4 /*yield*/, booksServices.show({ id: id })];
                    case 1:
                        book = _a.sent();
                        return [2 /*return*/, response.json(book)];
                }
            });
        });
    };
    BooksController.prototype.mark = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var booksServices, title, book;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        booksServices = new booksServices_1.BooksServices();
                        title = request.query.title;
                        return [4 /*yield*/, booksServices.markBook(title)];
                    case 1:
                        book = _a.sent();
                        return [2 /*return*/, response.json(book)];
                }
            });
        });
    };
    BooksController.prototype.update = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var booksServices, id, _b, category_id, title, sinopse, book;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        booksServices = new booksServices_1.BooksServices();
                        id = request.params.id;
                        _b = request.body, category_id = _b.category_id, title = _b.title, sinopse = _b.sinopse;
                        return [4 /*yield*/, booksServices.update({
                                id: id,
                                category_id: category_id,
                                sinopse: sinopse,
                                title: title,
                                photo: (_a = request.file) === null || _a === void 0 ? void 0 : _a.filename,
                            })];
                    case 1:
                        book = _c.sent();
                        return [2 /*return*/, response.status(200).json(book)];
                }
            });
        });
    };
    BooksController.prototype.destroy = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var booksServices, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        booksServices = new booksServices_1.BooksServices();
                        id = request.params.id;
                        return [4 /*yield*/, booksServices.destroy({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json()];
                }
            });
        });
    };
    return BooksController;
}());
exports.BooksController = BooksController;
