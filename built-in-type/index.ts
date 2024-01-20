//built in types

let userId: number = 687;
let firstName: string = "Foo";
let lastName: string = " Bar";
let isWorking: boolean = true;

const fullName = firstName.concat(lastName);

console.log(`
User Id: ${userId} \nUser Name: ${fullName} \nCurrently Working: ${isWorking}
`);

//void function
function display(): void {
  console.log("Void function!");
}
display();
