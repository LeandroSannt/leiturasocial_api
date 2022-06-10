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
var Comments_1 = __importDefault(require("./Comments"));
var Posts = /** @class */ (function () {
    function Posts() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Posts.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 500 }),
        __metadata("design:type", String)
    ], Posts.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Users_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
        __metadata("design:type", Users_1.default)
    ], Posts.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Posts.prototype, "user_id", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Comments_1.default; }, function (comment) { return comment.post; }),
        __metadata("design:type", Array)
    ], Posts.prototype, "comments", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Posts.prototype, "created_at", void 0);
    Posts = __decorate([
        (0, typeorm_1.Entity)('posts')
    ], Posts);
    return Posts;
}());
exports.default = Posts;
