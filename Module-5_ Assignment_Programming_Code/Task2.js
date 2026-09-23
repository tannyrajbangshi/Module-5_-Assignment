// Calculate factorial
function factorial(number) {

    // Start with 1
    let result = 1;

    // Loop from 1 to number
    for (let i = 1; i <= number; i++) {

        // Multiply result by i
        result = result * i;
    }

    // Return factorial
    return result;
}

// Input number
let number = 5;

// Show number
console.log("Number:", number);

// Show factorial
console.log("Factorial:", factorial(number));
