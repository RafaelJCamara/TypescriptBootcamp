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
