"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensuredAuthentication = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var AppErros_1 = __importDefault(require("../errors/AppErros"));
var auth_1 = __importDefault(require("../config/auth"));
function ensuredAuthentication(request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppErros_1.default('JWT is missing');
    }
    var _a = authHeader.split(' '), token = _a[1];
    try {
        var decoded = (0, jsonwebtoken_1.verify)(token, auth_1.default.jwt.secret);
        var sub = decoded.sub;
        request.user = {
            id: sub
        };
        return next();
    }
    catch (_b) {
        throw new Error('Invalid JWT token');
    }
}
exports.ensuredAuthentication = ensuredAuthentication;
