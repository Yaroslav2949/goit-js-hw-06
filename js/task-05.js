// варіант1 if else

const inputName =document.querySelector("#name-input")
const outputName= document.querySelector("#name-output")
inputName .addEventListener('input',OnInputChange)
function OnInputChange ({ currentTarget }) {
    if (currentTarget.value.trim() !== '') {
        outputName.textContent = currentTarget.value.trim() ;
      } else {
        outputName.textContent = 'Anonymous';
      }
   
}






// var 2 тернарник

// const inputName = document.getElementById('name-input');
// const outputName = document.getElementById('name-output');
//  const placeholder = (event) => {
//     outputName.textContent = inputName.value !== ''
//     ? event.currentTarget.value
//     : 'Anonymous';
//  };
//  inputName.addEventListener('input', placeholder);