type Student = { studentName: string; studentId: number };
let students: Student[];
students = [];

let userOne: Student;
userOne = { studentName: "Mr. X", studentId: 888 };
let userTwo: Student;
userTwo = { studentName: "Mr. Y", studentId: 999 };

students.push(userOne);
students.push(userTwo);

//console.log(students);

type RequestType = "POST" | "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}
requestHandler("POST");
