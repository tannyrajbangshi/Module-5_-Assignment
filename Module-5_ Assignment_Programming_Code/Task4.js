// Calculate array sum
function sumArray(numbers) {

    // Start sum from 0
    let sum = 0;

    // Loop through array
    for (let i = 0; i < numbers.length; i++) {

        // Add each number
        sum = sum + numbers[i];
    }

    // Return total sum
    return sum;
}

// Input array
let numbers = [10, 20, 30, 40];

// Show array
console.log("Array:", numbers);

// Show sum
console.log("Sum:", sumArray(numbers));
