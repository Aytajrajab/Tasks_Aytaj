function numReverse(num) {
    return parseFloat(num.toString().split('').reverse().join(''));
}

let num = prompt("Enter number: ")

console.log(numReverse(num));

alert()
