"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sessionController_1 = require("../controllers/sessionController");
var sessionsRouter = (0, express_1.Router)();
var sessionController = new sessionController_1.SessionController();
sessionsRouter.post('/', sessionController.postUser);
exports.default = sessionsRouter;
