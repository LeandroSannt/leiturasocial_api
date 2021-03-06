"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Users_1 = __importDefault(require("./Users"));
var Follower_user = /** @class */ (function () {
    function Follower_user() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Follower_user.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Users_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
        __metadata("design:type", Users_1.default)
    ], Follower_user.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Follower_user.prototype, "user_id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Follower_user.prototype, "follower_user_id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Follower_user.prototype, "created_at", void 0);
    Follower_user = __decorate([
        (0, typeorm_1.Entity)('following_users')
    ], Follower_user);
    return Follower_user;
}());
exports.default = Follower_user;
