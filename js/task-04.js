const conterEl=document.querySelector('#counter')

let counterValue = 0 
const valueRef = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const OnClickDecrementBtn  =(event)=>{
    counterValue -= 1;
    valueRef.textContent= counterValue 
};

const onClickIncrementBtn = (element)=>{
    counterValue += 1;
    valueRef.textContent= counterValue 
}

decrementBtn.addEventListener('click', OnClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);