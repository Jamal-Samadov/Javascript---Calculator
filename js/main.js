let display = document.querySelector('.calc-input')
let keys = document.querySelector('.calc-keys')

let displayValue= "0"

updatedDisplay()

function updatedDisplay(){
    display.value = displayValue
}

keys.addEventListener('click', (e) => {
    let element = e.target;
    if(!element.matches('button')) return;

    if(element.classList.contains('operator')) {
        console.log('operator',element.value);
        return;
    }
    if(element.classList.contains('decimal')) {
        console.log('decimal',element.value);
        return;
    }
    if(element.classList.contains('clear')) {
        console.log('clear',element.value);
        return;
    }
    inputNumber(element.value)
    updatedDisplay()
})

function inputNumber(num){
    displayValue = num
}