// variant 1 

// const Form =document.querySelector('.login-form')
// Form.addEventListener('submit',OnFormSubmit)
// function OnFormSubmit (event){
// event.preventDefault();
// const {email,password}=event.currentTarget.elements;
// if (email.value === '' || password.value === ''){
//   return alert ('Всі поля повинні бути заповнені!!!')
// }else {
//         const formData = {
//           email: email.value,
//           password: password.value,
//         };
        
      
//       console.log(formData);
//       event.currentTarget.reset()
// }



// }

// variant2

const Form =document.querySelector('.login-form')
Form.addEventListener('submit',OnFormSubmit)
const profile = {};

function  OnFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
   return alert('Всі поля повинні бути заповнені!!!');
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
   
  }
  event.currentTarget.reset();
}



