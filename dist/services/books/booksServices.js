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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksServices = void 0;
var typeorm_1 = require("typeorm");
var AppErros_1 = __importDefault(require("../../errors/AppErros"));
var BooksRepository_1 = require("../../repositories/BooksRepository");
var readPdf_1 = require("./readPdf");
var BooksServices = /** @class */ (function () {
    function BooksServices() {
    }
    BooksServices.prototype.create = function (_a) {
        var photo = _a.photo, category_id = _a.category_id, pdfBook = _a.pdfBook, sinopse = _a.sinopse;
        return __awaiter(this, void 0, void 0, function () {
            var teste, booksRepository, readPdf, pdf, createBook, save;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        teste = "a";
                        booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.BooksRepository);
                        readPdf = new readPdf_1.read();
                        return [4 /*yield*/, readPdf.read(pdfBook)
                            //validação para caso não tenha title
                        ];
                    case 1:
                        pdf = _b.sent();
                        //validação para caso não tenha title
                        if (sinopse.length > 200) {
                            throw new AppErros_1.default('Não é possivel resgistrar uma sinopse desse tamanho');
                        }
                        createBook = booksRepository.create({
                            title: pdf.info.Title ? pdf.info.Title : 'Livro sem Titulo',
                            author: pdf.info.Author,
                            text: pdf.text,
                            numberpages: pdf.numpages,
                            photo: photo,
                            category_id: category_id,
                            sinopse: sinopse
                        });
                        return [4 /*yield*/, booksRepository.save(createBook)];
                    case 2:
                        save = _b.sent();
                        return [2 /*return*/, save];
                }
            });
        });
    };
    BooksServices.prototype.list = function (category_id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var booksRepository, books;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.BooksRepository);
                        return [4 /*yield*/, booksRepository.getBooksCategory(category_id, title)];
                    case 1:
                        books = _a.sent();
                        return [2 /*return*/, books];
                }
            });
        });
    };
    BooksServices.prototype.show = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var booksRepository, book;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.BooksRepository);
                        return [4 /*yield*/, booksRepository.findOne({
                                relations: ['category'],
                                where: {
                                    id: id
                                },
                                cache: 180000
                            })];
                    case 1:
                        book = _b.sent();
                        if (!book) {
                            throw new AppErros_1.default('Not find book', 404);
                        }
                        return [2 /*return*/, book];
                }
            });
        });
    };
    BooksServices.prototype.markBook = function (title) {
        return __awaiter(this, void 0, void 0, function () {
            var booksRepository, book;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.BooksRepository);
                        return [4 /*yield*/, booksRepository.find({
                                where: {
                                    title: (0, typeorm_1.Like)("%".concat(title, "%"))
                                },
                            })];
                    case 1:
                        book = _a.sent();
                        if (!book) {
                            throw new AppErros_1.default('Not find book', 404);
                        }
                        return [2 /*return*/, book];
                }
            });
        });
    };
    BooksServices.prototype.update = function (_a) {
        var id = _a.id, category_id = _a.category_id, sinopse = _a.sinopse, title = _a.title, photo = _a.photo;
        return __awaiter(this, void 0, void 0, function () {
            var booksRepository, book;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.BooksRepository);
                        return [4 /*yield*/, booksRepository.findOne({
                                where: { id: id }
                            })];
                    case 1:
                        book = _b.sent();
                        book.category_id = category_id;
                        book.sinopse = sinopse;
                        book.title = title;
                        book.photo = photo;
                        return [4 /*yield*/, booksRepository.save(book)];
                    case 2:
                        _b.sent();
                        if (!book) {
                            throw new AppErros_1.default('Not find book', 404);
                        }
                        return [2 /*return*/, book];
                }
            });
        });
    };
    BooksServices.prototype.destroy = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var booksRepository, book;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        booksRepository = (0, typeorm_1.getCustomRepository)(BooksRepository_1.BooksRepository);
                        return [4 /*yield*/, booksRepository.findOne({
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        book = _b.sent();
                        if (!book) {
                            throw new AppErros_1.default('Not find book', 404);
                        }
                        return [4 /*yield*/, booksRepository.remove(book)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return BooksServices;
}());
exports.BooksServices = BooksServices;
