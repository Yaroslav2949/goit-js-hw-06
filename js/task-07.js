const InputRangeRef = document.querySelector('#font-size-control')
const InputTextRef = document.querySelector('#text')
function handleInput (event){
    InputTextRef.style.fontSize =event.currentTarget.value +'px';
}
InputRangeRef.addEventListener('input',handleInput);



console.log(InputRangeRef,InputTextRef)