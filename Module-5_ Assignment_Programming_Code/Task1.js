// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {

    // Apply the Fahrenheit conversion formula
    let fahrenheit = (celsius * 9 / 5) + 32;

    // Return the converted temperature
    return fahrenheit;
}

// Set Celsius temperature
let celsius = 25;

// Call the function and store the result
let result = celsiusToFahrenheit(celsius);

// Display Celsius temperature
console.log("Celsius:", celsius);

// Display Fahrenheit temperature
console.log("Fahrenheit:", result);
