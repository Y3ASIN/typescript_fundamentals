var Student = /** @class */ (function () {
    function Student(studentName, studentId) {
        this.studentName = studentName;
        this.studentId = studentId;
    }
    Student.prototype.display = function () {
        console.log("Student name: ".concat(this.studentName, " \nStudent id: ").concat(this.studentId));
    };
    return Student;
}());
// class object 
var studentOne = new Student('Mr. Cold', 687);
studentOne.display();
