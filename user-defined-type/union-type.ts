let userId: number | string | boolean;

userId = "687";
userId = 687;
userId = false;

function userInfo(userId: number | string) {
  console.log(userId);
}
userInfo("Foo");
userInfo(211);
