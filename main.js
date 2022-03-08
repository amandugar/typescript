var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello", this.first_name);
    };
    Person.prototype.ageInYears = function (years) {
        return this.age + years;
    };
    return Person;
}());
// var p: Person
// p = new Person()
// p.first_name = "Aman"
// p.greet()
var p = new Person("Aman", "Dugar", 20);
p.age = 6;
console.log(p.ageInYears(12));
var Report = /** @class */ (function () {
    function Report(data) {
        this.data = data;
    }
    Report.prototype.run = function () {
        this.data.forEach(function (line) {
            console.log(line);
        });
    };
    return Report;
}());
var TabbedReport = /** @class */ (function (_super) {
    __extends(TabbedReport, _super);
    function TabbedReport(headers, values) {
        var _this = _super.call(this, values) || this;
        _this.headers = headers;
        return _this;
    }
    TabbedReport.prototype.run = function () {
        console.log(this.headers);
        _super.prototype.run.call(this);
    };
    return TabbedReport;
}(Report));
var headers = ["Name"];
var data = ["Alice Green", "Paul Pfifer", "Louis Blakenship"];
var r = new TabbedReport(headers, data);
r.run();
var newData = ["Alice Green", "Paul Pfifer", "Louis Blakenship"];
newData.forEach(function (line) { return console.log(line); });
//# sourceMappingURL=main.js.map