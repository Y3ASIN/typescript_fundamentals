var students;
students = [];
var userOne;
userOne = { studentName: "Mr. X", studentId: 888 };
var userTwo;
userTwo = { studentName: "Mr. Y", studentId: 999 };
students.push(userOne);
students.push(userTwo);
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
