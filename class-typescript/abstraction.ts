abstract class Department {
  // properties, constructor, methods
  departmentName: string;
  departmentId: number;

  constructor(departmentName: string, departmentId: number) {
    this.departmentName = departmentName;
    this.departmentId = departmentId;
  }

  abstract display(): void;
}

class SWE extends Department {
  coreCourse: string;

  constructor(
    departmentName: string,
    departmentId: number,
    coreCourse: string
  ) {
    super(departmentName, departmentId);
    this.coreCourse = coreCourse;
  }

  display(): void {
    console.log(
      `Department name: ${this.departmentName} \nDepartment id: ${this.departmentId} \nCourse type: ${this.coreCourse}`
    );
  }
}

// class object
let sweDepartment = new SWE("Software Engineering", 35, "Software based");
sweDepartment.display();
