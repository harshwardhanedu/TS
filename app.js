//class
var App = /** @class */ (function () {
    function App(name) {
        this.name = "Harsh";
        this.name = name;
        console.log(name);
    }
    App.prototype.getName = function () {
        return this.name;
    };
    return App;
}());
var a1 = new App("Harsh");
console.log(a1.getName());
