var users;
users = [];
var userOne;
userOne = { userName: "Mr. X", userId: 888 };
var userTwo;
userTwo = { userName: "Mr. Y", userId: 999 };
users.push(userOne);
users.push(userTwo);
// users.forEach(element => {
//     console.log(element)
// });
// for (const iterator of users) {
//     console.log(iterator)
// }
for (var key in users) {
    console.log(users[key]);
}
