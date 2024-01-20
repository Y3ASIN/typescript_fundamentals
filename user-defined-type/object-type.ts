let users: object[];
users = [];

let userOne: { userName: string; userId: number };
userOne = { userName: "Mr. X", userId: 888 };
let userTwo: { userName: string; userId: number };
userTwo = { userName: "Mr. Y", userId: 999 };

users.push(userOne);
users.push(userTwo);

// users.forEach(element => {
//     console.log(element)
// });

// for (const iterator of users) {
//     console.log(iterator)
// }

for (const key in users) {
  console.log(users[key]);
}
