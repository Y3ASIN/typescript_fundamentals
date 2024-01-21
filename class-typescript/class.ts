class Student {
    // properties, constructor, methods
    studentName : string;
    studentId:number;

    constructor(studentName:string, studentId:number){
        this.studentName = studentName;
        this.studentId = studentId;
    }

     display():void{
        console.log(`Student name: ${this.studentName} \nStudent id: ${this.studentId}`)
    }
}

// class object 
let studentOne = new Student('Mr. Cold',687)
studentOne.display()