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
var Posts_1 = __importDefault(require("./Posts"));
var Books_1 = __importDefault(require("./Books"));
var Users_1 = __importDefault(require("./Users"));
var Comments = /** @class */ (function () {
    function Comments() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Comments.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 150 }),
        __metadata("design:type", String)
    ], Comments.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Posts_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'post_id' }),
        __metadata("design:type", Posts_1.default)
    ], Comments.prototype, "post", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Comments.prototype, "post_id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Comments.prototype, "book_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Users_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
        __metadata("design:type", Users_1.default)
    ], Comments.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Books_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'book_id' }),
        __metadata("design:type", Books_1.default)
    ], Comments.prototype, "book", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Comments.prototype, "user_id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Comments.prototype, "created_at", void 0);
    Comments = __decorate([
        (0, typeorm_1.Entity)('comments')
    ], Comments);
    return Comments;
}());
exports.default = Comments;
