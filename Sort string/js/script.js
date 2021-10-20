function setAlphabetical(str) {
    return str.split('').sort().join('');
}

let str = String(prompt("Enter word that you want to sort: "));

console.log(setAlphabetical(str));