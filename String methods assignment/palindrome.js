function palindrome(string) {
    
    // const array = string.split('');
    // const reverseArray = array.reverse();
    // const reverseString = reverseArray.join('');
    const reverseString = string.split("").reverse().join("");

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

palindrome("mada");

// const str="Clarence";
// const reverseStr=str.split("").reverse().join("")
// console.log(reverseStr);
