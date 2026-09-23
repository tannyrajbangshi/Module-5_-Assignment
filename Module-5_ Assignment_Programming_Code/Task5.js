// FizzBuzz function
function fizzBuzz() {

    // Loop from 1 to 15
    for (let i = 1; i <= 15; i++) {

        // Divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }

        // Divisible by 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }

        // Divisible by 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }

        // Print the number
        else {
            console.log(i);
        }
    }
}

// Call function
fizzBuzz();
