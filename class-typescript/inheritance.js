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
var Engineer = /** @class */ (function () {
    function Engineer(engName, engId) {
        this.engName = engName;
        this.engId = engId;
    }
    Engineer.prototype.display = function () {
        console.log("Engineer name: ".concat(this.engName, " \nEngineer id: ").concat(this.engId));
    };
    return Engineer;
}());
var SWE = /** @class */ (function (_super) {
    __extends(SWE, _super);
    function SWE(engName, engId, engType) {
        var _this = _super.call(this, engName, engId) || this;
        _this.engType = engType;
        return _this;
    }
    SWE.prototype.display = function () {
        console.log("Engineer name: ".concat(this.engName, " \nEngineer id: ").concat(this.engId, " \nEngineer type: ").concat(this.engType));
    };
    return SWE;
}(Engineer));
// class object 
var engineer = new SWE('Mr. Cold', 687, 'Development');
engineer.display();
