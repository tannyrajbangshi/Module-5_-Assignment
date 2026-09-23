// Check palindrome
function isPalindrome(word) {

    // Reverse the word
    let reversed = word.split("").reverse().join("");

    // Compare both words
    return word === reversed;
}

// Input word
let word = "racecar";

// Show word
console.log("Word:", word);

// Show result
console.log("Palindrome:", isPalindrome(word));
