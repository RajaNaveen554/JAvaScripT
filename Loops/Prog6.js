// Program 8: Check whether a number is Prime
let primeNum = 17;
let count = 0;

for (let i = 1; i <= primeNum; i++) {
    if (primeNum % i === 0) {
        count++;
    }
}

if (count === 2) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}
