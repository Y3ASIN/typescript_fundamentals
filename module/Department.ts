export class Department {
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