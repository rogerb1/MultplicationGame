"use strict";

/*
    This game was created using composition software design 
    principles. 
 
    This is the commented program.

    ROGER: 08/22/19

*/

// Multiplies two numbers
// and returns the answer
const equation = (state) => ({
    multiply() {
        let equation = state.number * state.numberTwo;
        document.getElementById('numbers').textContent = (state.number + ' x ' + state.numberTwo);
        return equation;
    }
});

// Takes two parameters and 
// returns the equation function.
function numbers(number, numberTwo) {
    let state = {
        number,
        numberTwo
    }

    return Object.assign(
        equation(state)
    )
}

let test = numbers(Math.floor(Math.random() * 12), Math.floor(Math.random() * 12));
const answer = test.multiply(0, 0);
console.log("Answer: " + answer);

// Creates an array with four indicies
// takes that state as a parameter
// Displays all arrays on Dom
const wholeArray = (state) => ({
    createArray() {
        let numberArray = [];
        for (let i = 0; i < 1; i++) {
            numberArray.push(state);
            numberArray.push(state - 2);
            numberArray.push(state + 10);
            numberArray.push(state * 3 - 1);
        }
        return numberArray;
    }
});

// Takes the returned answer alues as a parameter
function array() {
    return Object.assign(
        wholeArray(state)
    )
}

// The earlier returned value as become the state of the
// function. I called whole array because thats the function
let storeValue = wholeArray(answer);

// This is where the array is stored
let producedArray = storeValue.createArray();

let newArray = [...producedArray];

console.log("New array: " + newArray);

// Shuffles array with the Fisher-Yates algorithm
// Displays array on the DOM
const shuffleArray = (state) => ({
    shuffledArray() {
        for (let i = newArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * newArray.length)
            let temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
        const zero = document.getElementById('zero').textContent = (newArray[0]);
        const one = document.getElementById('one').textContent = (newArray[1]);
        const two = document.getElementById('two').textContent = (newArray[2]);
        const three = document.getElementById('three').textContent = (newArray[3]);
        console.log("After shuffle: " + newArray);
    }
});

function sArray(newArray) {
    let state = {
        newArray
    }

    return Object.assign(
        shuffleArray(state)
    )
}

let hey = sArray(newArray);
hey.shuffledArray();


//  Function that starts the whole game

// Loop over all buttons
let cards = Array.from(document.getElementsByClassName('button'));
cards.forEach(card => {
    card.addEventListener('click', () => {
        let cardNumber = parseInt(card.innerHTML);
        if (cardNumber === answer) {
            alert('Correct, the answer is ' + cardNumber);
        } else {
            alert('Wrong, you chose ' + cardNumber + " the answer is " + answer)
        }
        location.reload();
    });
});