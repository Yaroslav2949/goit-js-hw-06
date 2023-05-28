
const CheckinputEl = document.querySelector('#validation-input')
CheckinputEl.addEventListener('blur', onBlurBorderColor);
function onBlurBorderColor(event){
    const InputDataLength = Number(CheckinputEl.dataset.length);
    const InputValueLength =Number(CheckinputEl.value.trim().length);
    if (InputDataLength ===InputValueLength) {
        CheckinputEl.classList.add('valid')
        CheckinputEl.classList.remove('invalid')
    } else {
        CheckinputEl.classList.remove('valid')
        CheckinputEl.classList.add('invalid')
    }
}



console.log(CheckinputEl)

 