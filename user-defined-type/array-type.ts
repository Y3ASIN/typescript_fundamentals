// let userId : number[];
let userId: Array<number>;
userId = [80, 90, 30, 40, 70];

userId.push(100);
userId.sort((a, b) => a - b);
console.log(userId);

// let multiTypeArray: (number | string)[];
let multiTypeArray: Array<number | string | boolean>;
multiTypeArray = ["multi", 1, false];
console.log(multiTypeArray);
