"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = 0;
    }
    User.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return User;
}());
exports.User = User;
