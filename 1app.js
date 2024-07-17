let user = prompt("Random bir sey daxil edin:");
for (let i = 0; i < user.length; i++) {
    let space = user.charAt();
    if (space >= "0" && space <= "9") {
        console.log("metnde reqem var.");
    } else {
        console.log("metnde reqem yoxdur.");

    }
}
