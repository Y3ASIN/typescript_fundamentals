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
// public, private, protected, readonly
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
var CSE = /** @class */ (function (_super) {
    __extends(CSE, _super);
    function CSE(departmentName, departmentId, coreCourse) {
        var _this = _super.call(this, departmentName, departmentId) || this;
        _this.coreCourse = coreCourse;
        return _this;
    }
    CSE.prototype.display = function () {
        console.log("Department name: ".concat(this.departmentName, " \nDepartment id: ").concat(this.departmentId, " \nCourse type: ").concat(this.coreCourse));
    };
    CSE.prototype.getCoreCourse = function () {
        return this.coreCourse;
    };
    CSE.prototype.setCoreCourse = function (coreCourse) {
        this.coreCourse = coreCourse;
    };
    return CSE;
}(Department));
// class object
var cseDepartment = new CSE("Computer Science & Engineering", 15, "Software based");
cseDepartment.setCoreCourse("Hardware based");
console.log(cseDepartment.getCoreCourse());
