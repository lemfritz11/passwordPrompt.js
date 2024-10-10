const correctPassword = "bscs2b";
let userPassword;

do {
    userPassword = prompt("Enter your password:");
    
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);

console.log("Access granted.");
