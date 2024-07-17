console.log("TASK 2");
let user = prompt("Random bir sey daxil edin:");
let num = 0;
for (let i = 0; i < user.length; i++) {
    if (user[i] == user.match(/[0-9]/)) {
        num++;
    }
}
if (num == 0) {
    console.log("metnde reqem yoxdur.");
} else {
    console.log("metnde reqem var.");
}