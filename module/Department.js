"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(departmentName, departmentId) {
        this.departmentName = departmentName;
        this.departmentId = departmentId;
    }
    Department.prototype.display = function () {
        console.log("Department name: ".concat(this.departmentName, " \nDepartment id: ").concat(this.departmentId));
    };
    return Department;
}());
exports.Department = Department;
