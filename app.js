"use strict";
exports.__esModule = true;
var Child = /** @class */ (function () {
    function Child() {
        this.name = "harsh";
    }
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}());
var c1 = new Child();
console.log(c1.getName());
