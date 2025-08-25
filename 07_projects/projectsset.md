# Projects releated to DOM

## projects link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-rprm2fap?file=.vscode%2Fsettings.json,1-colorChanger%2Fstyle.css)

# Solution Code

## project 1 (Color Switcher)

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
    });
});

```


## project 2 (BMI Calculator)

```javascript
// JS starts here 

const form = document.querySelector('form')

// if you ask for value before then this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
/* outside the event listener (at the very top), this runs immediately when the page loads.
At that time:

The user hasn’t typed anything yet. Therefore they are declared inside submit event since they only execute when user click calculate button */

form.addEventListener('submit', function(event){
    event.preventDefault() // prevents the default submit event of form since it submits the data to the server by default

    const height = parseInt(document.querySelector('#height').value) // the output we get is in string so we use 'parseInt' to convert it into int
    const weight = parseInt(document.querySelector('#weight').value)
    const results =document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    } 
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else{
       const bmi = (weight/((height*height)/10000)).toFixed(2) // BMI Formula and toFixed is used to display value only to 2 decimal places

       if(bmi<18.6){
            results.innerHTML = `${bmi}: You are underweight andar wahar khi ka toh khaana kha lawde`;
       }
       else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `${bmi}: You are fit kuch ghar ke bahar ka bhi khaana kha lawde`;
       }
       else{
        results.innerHTML = `${bmi}: You are overweight kuch ghar ke andar ka bhi khaana kha lawde `;
       }
       
    }

})

```


## project 3 (Digital Clock)

```javascript

// JS starts here

const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) // 1000ms here is delay time

// setInterval: It’s a built-in JavaScript function that repeatedly runs a given function at fixed time intervals (in milliseconds) until you stop it.

// Use "clearInterval(id)"" to stop it.

```

## project 4 (guess the number)

```javascript

// JS starts here 

let randomNumber = parseInt((Math.random()*100)+1); // parseInt so that we don't get decimal numbers

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []; // saare previous guesses ek array mein store krenge
let numGuess = 0; // itne guess krdiye uska count max 10 allowed hai and initially 1 de diya 

let playGame = true; // game khel bhi skte ho ya nhi 

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault() // to prevent the form from it's default functioning which is it sends data to the server because hume yha value leni hai 
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){ // to check if the guess made is within bound 1-100
     if(isNaN(guess)){
        alert('Please enter a valid number')
     }
     else if(guess<1){
        alert('Please enter a number more than 1')
     }
     else if(guess>100){
        alert('Please enter a number less than 10')
     }
     else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
     }
}

function checkGuess(guess){ // to check if the guess is higher or lower
    if(guess===randomNumber){
        displayMessage(`You guessed it right. The number was ${randomNumber}`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){ // to display guess
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){ // to tell if the number you guessed is higher or lower the ans guess
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){ // to end game
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // The input becomes non-editable. Clicking on it won’t let you type. It also won’t be submitted as part of a form.
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`; // start new game ka button bna diya 
    startOver.appendChild(p); // now it appears on the screen
    playGame=false;
    newGame();
}

function newGame(){ // to start new game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(event){
        randomNumber = parseInt((Math.random()*100)+1);
        prevguess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `10`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}

```


## project 5 (Unlimited Color)

```javascript
// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]; // random 6 digit ki from hex value chahiye to denote colors 
    } // multiplied by 16 so that we can numbers till 15.9999
    return color;
};

let intervalId;

const startChangingColor = function(){
    if(!intervalId){ // iska matlab hai agar interval pehle se chal nahi raha hai tabhi naya interval shuru karo.Aisa karne se ek hi time pe multiple intervals start hone se bachte ho
        intervalId = setInterval(changeColor, 1000);
    }
   function changeColor(){
    document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; // to save memory by flushing the previously stored intervalId's
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

## project 6 (keyboard Check)

``` javascript
// JS starts here

const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `<div class = 'color'>
       <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${event.key === '' ? 'Space': event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
</table>
    </div>`
});

```