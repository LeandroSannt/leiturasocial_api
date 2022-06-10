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
exports.UserServices = void 0;
var typeorm_1 = require("typeorm");
var UserRepository_1 = require("../../repositories/UserRepository");
var Following_users_1 = require("../../repositories/Following_users");
var CommentsRepository_1 = require("../../repositories/CommentsRepository");
var PostsRepository_1 = require("../../repositories/PostsRepository");
var AppErros_1 = __importDefault(require("../../errors/AppErros"));
var UpdateAvatarServices_1 = require("./UpdateAvatarServices");
var bcryptjs_1 = require("bcryptjs");
var UserServices = /** @class */ (function () {
    function UserServices() {
    }
    UserServices.prototype.create = function (_a) {
        var name = _a.name, surname = _a.surname, email = _a.email, password = _a.password, telephone = _a.telephone;
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, findUser, hashePassword, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userRepository = (0, typeorm_1.getCustomRepository)(UserRepository_1.UserRepository);
                        return [4 /*yield*/, userRepository.findOne({ where: { email: email } })];
                    case 1:
                        findUser = _b.sent();
                        if (findUser) {
                            throw new AppErros_1.default('Email ja cadatrado');
                        }
                        return [4 /*yield*/, (0, bcryptjs_1.hash)(password, 8)];
                    case 2:
                        hashePassword = _b.sent();
                        user = userRepository.create({
                            name: name,
                            surname: surname,
                            email: email,
                            password: hashePassword,
                            telephone: telephone
                        });
                        return [4 /*yield*/, userRepository.save(user)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserServices.prototype.update = function (_a) {
        var avatar = _a.avatar, id = _a.id, name = _a.name, surname = _a.surname, email = _a.email, password = _a.password, telephone = _a.telephone, confirmPassword = _a.confirmPassword;
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, updateFotoService, finduser, hashePassword_1, user_1, hashePassword, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userRepository = (0, typeorm_1.getCustomRepository)(UserRepository_1.UserRepository);
                        updateFotoService = new UpdateAvatarServices_1.UpdatePhotoService();
                        return [4 /*yield*/, userRepository.findOne(id)];
                    case 1:
                        finduser = _b.sent();
                        if (password != confirmPassword) {
                            throw new AppErros_1.default("Senha e confirmação de senha não são iguais", 401);
                        }
                        if (!avatar) return [3 /*break*/, 5];
                        return [4 /*yield*/, updateFotoService.updatePhoto({
                                id: id,
                                avatar: avatar,
                            })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, (0, bcryptjs_1.hash)(password, 8)];
                    case 3:
                        hashePassword_1 = _b.sent();
                        user_1 = userRepository.merge(finduser, {
                            name: name,
                            avatar: avatar,
                            surname: surname,
                            email: email,
                            password: hashePassword_1,
                            telephone: telephone
                        });
                        return [4 /*yield*/, userRepository.save(user_1)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, user_1];
                    case 5: return [4 /*yield*/, (0, bcryptjs_1.hash)(password, 8)];
                    case 6:
                        hashePassword = _b.sent();
                        user = userRepository.merge(finduser, {
                            name: name,
                            surname: surname,
                            email: email,
                            password: hashePassword,
                            telephone: telephone
                        });
                        return [4 /*yield*/, userRepository.save(user)];
                    case 7:
                        _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserServices.prototype.listAll = function (user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var following_usersRepository, usersFollows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        following_usersRepository = (0, typeorm_1.getCustomRepository)(Following_users_1.Following_usersRepository);
                        return [4 /*yield*/, following_usersRepository.usersFollows(user_id)];
                    case 1:
                        usersFollows = _a.sent();
                        usersFollows.forEach(function (user) {
                            delete user.password;
                        });
                        return [2 /*return*/, usersFollows];
                }
            });
        });
    };
    UserServices.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, following_usersRepository, postsRepository, commentsRepository, followers, comments, posts, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepository = (0, typeorm_1.getCustomRepository)(UserRepository_1.UserRepository);
                        following_usersRepository = (0, typeorm_1.getCustomRepository)(Following_users_1.Following_usersRepository);
                        postsRepository = (0, typeorm_1.getCustomRepository)(PostsRepository_1.PostsRepository);
                        commentsRepository = (0, typeorm_1.getCustomRepository)(CommentsRepository_1.CommentsRepository);
                        return [4 /*yield*/, following_usersRepository.find({ where: { follower_user_id: id } })
                            //pegar todos os comentarios
                        ];
                    case 1:
                        followers = _a.sent();
                        return [4 /*yield*/, commentsRepository.find({ where: { user_id: id } })
                            //pegar todos posts
                        ];
                    case 2:
                        comments = _a.sent();
                        return [4 /*yield*/, postsRepository.find({ where: { user_id: id } })
                            //pegar o usuario
                        ];
                    case 3:
                        posts = _a.sent();
                        return [4 /*yield*/, userRepository.findOne(id)];
                    case 4:
                        user = _a.sent();
                        if (!user) {
                            throw new AppErros_1.default('Não é possivel deletar esse usuário');
                        }
                        return [4 /*yield*/, following_usersRepository.remove(followers)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, commentsRepository.remove(comments)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, postsRepository.remove(posts)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, userRepository.remove(user)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserServices;
}());
exports.UserServices = UserServices;
