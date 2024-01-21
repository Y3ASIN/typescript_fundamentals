// public, private, protected, readonly
class Department {
  public departmentName: string;
  departmentId: number;

  constructor(departmentName: string, departmentId: number) {
    this.departmentName = departmentName;
    this.departmentId = departmentId;
  }

  display(): void {
    console.log(
      `Department name: ${this.departmentName} \nDepartment id: ${this.departmentId}`
    );
  }
}

class CSE extends Department {
  protected coreCourse: string;

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

  getCoreCourse(): string {
    return this.coreCourse;
  }
  setCoreCourse(coreCourse: string): void {
    this.coreCourse = coreCourse;
  }

}

// class object
let cseDepartment = new CSE("Computer Science & Engineering", 15, "Software based");
cseDepartment.setCoreCourse("Hardware based");
console.log(cseDepartment.getCoreCourse());
