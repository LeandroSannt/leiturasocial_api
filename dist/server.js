"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
var AppErros_1 = __importDefault(require("./errors/AppErros"));
var routes_1 = __importDefault(require("./routes"));
require("./database");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.disable('x-powered-by');
app.use(express_1.default.static('tmp'));
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(function (err, request, response, next) {
    if (err instanceof AppErros_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            error: err.message,
        });
    }
    console.error(err);
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
dotenv_1.default.config();
console.log(process.env.NODE_ENV);
app.listen(4000, function () {
    console.log("server is running in port 4000");
});
