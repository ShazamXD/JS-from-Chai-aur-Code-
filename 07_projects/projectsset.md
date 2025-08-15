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