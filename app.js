console.log("TASK 1");
let text = "Hello, World";
let len = text.length;
let first = -1;
for (let i = 0; i < len; i++) {
    if (text[i] === ',') {
        first = i;
        break;
    }
}

console.log(first);