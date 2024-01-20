//enum - store constants; duplication not possible
// numeric, string, heterogenous
//numeric enum
var requestTypeNumber;
(function (requestTypeNumber) {
    requestTypeNumber[requestTypeNumber["readNumber"] = 1] = "readNumber";
    requestTypeNumber[requestTypeNumber["deleteNumber"] = 2] = "deleteNumber";
    requestTypeNumber[requestTypeNumber["addNumber"] = 3] = "addNumber";
})(requestTypeNumber || (requestTypeNumber = {}));
// console.log(requestTypeNumber.addNumber)
// console.log(requestTypeNumber['deleteNumber'])
console.log(requestTypeNumber);
//string enum
var requestTypeString;
(function (requestTypeString) {
    requestTypeString["read"] = "one";
    requestTypeString["write"] = "two";
    requestTypeString["delete"] = "three";
})(requestTypeString || (requestTypeString = {}));
console.log(requestTypeString);
//heterogenous enum
var requestTypeHetero;
(function (requestTypeHetero) {
    requestTypeHetero["address"] = "checked-in";
    requestTypeHetero["protocol"] = "https";
    requestTypeHetero[requestTypeHetero["status"] = 200] = "status";
})(requestTypeHetero || (requestTypeHetero = {}));
console.log(requestTypeHetero.status);
