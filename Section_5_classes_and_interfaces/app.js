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
var Department = /** @class */ (function () {
    function Department(name, employees) {
        this.name = name;
        this.employees = employees;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.listEmployees = function () {
        dev.employees.forEach(function (employee) { return console.log(employee); });
    };
    return Department;
}());
var dev = new Department("development", []);
console.log(dev.name);
dev.addEmployee("PersonA");
dev.addEmployee("PersonB");
dev.addEmployee("PersonC");
dev.listEmployees();
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //you can explicitly call the Department contructor by using the super(constructor_arguments) inside this class's constructor
        _this.recentEmail = "admin@admin.com";
        return _this;
    }
    Object.defineProperty(ITDepartment.prototype, "mostRecentEmail", {
        get: function () {
            return this.recentEmail;
        },
        set: function (recent) {
            this.recentEmail = recent;
        },
        enumerable: false,
        configurable: true
    });
    //this will override the method definition defined in the base class
    ITDepartment.prototype.addEmployee = function (employee) { };
    return ITDepartment;
}(Department));
var itDep = new ITDepartment("IT", []);
console.log(itDep.mostRecentEmail);
itDep.mostRecentEmail = "rafael@email.com";
console.log(itDep.mostRecentEmail);
