const s = "axb3[z]4[c]";

// Output: "axbzzzcccc"

const decodeString = (s) => {
    const stack = [];
    let currentString = '';
    let currentNumber = 0;

    for (const char of s) {
        if (!isNaN(char) && char !== ' ') {          // если цифра
            currentNumber = currentNumber * 10 + Number(char);
        } else if (char === '[') {                   // открывающая скобка
            stack.push([currentString, currentNumber]);
            currentString = '';
            currentNumber = 0;
        } else if (char === ']') {                   // закрывающая скобка
            const [prevString, num] = stack.pop();
            currentString = prevString + currentString.repeat(num);
        } else {                                     // буква
            currentString += char;
        }
    }

    return currentString;
}

console.log(decodeString(s));