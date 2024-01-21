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
    function Department(departmentName, departmentId) {
        this.departmentName = departmentName;
        this.departmentId = departmentId;
    }
    return Department;
}());
var SWE = /** @class */ (function (_super) {
    __extends(SWE, _super);
    function SWE(departmentName, departmentId, coreCourse) {
        var _this = _super.call(this, departmentName, departmentId) || this;
        _this.coreCourse = coreCourse;
        return _this;
    }
    SWE.prototype.display = function () {
        console.log("Department name: ".concat(this.departmentName, " \nDepartment id: ").concat(this.departmentId, " \nCourse type: ").concat(this.coreCourse));
    };
    return SWE;
}(Department));
// class object
var sweDepartment = new SWE("Software Engineering", 35, "Software based");
sweDepartment.display();
