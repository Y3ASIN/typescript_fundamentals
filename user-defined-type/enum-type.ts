//enum - store constants; duplication not possible
// numeric, string, heterogenous

//numeric enum
enum requestTypeNumber {
  readNumber = 1,
  deleteNumber,
  addNumber,
}
// console.log(requestTypeNumber.addNumber)
// console.log(requestTypeNumber['deleteNumber'])
console.log(requestTypeNumber);

//string enum
enum requestTypeString {
  read = "one",
  write = "two",
  delete = "three",
}
console.log(requestTypeString);

//heterogenous enum
enum requestTypeHetero {
  address = "checked-in",
  protocol = "https",
  status = 200,
}
console.log(requestTypeHetero.status);
