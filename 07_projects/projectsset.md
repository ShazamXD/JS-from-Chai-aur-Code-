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