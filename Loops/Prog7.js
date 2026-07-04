
// Program 9: Check whether a number is Palindrome
let number = 121;
let temp = number;
let reverse = 0;
let digit;

while (number > 0) {
    digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}

if (temp === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}