import { auth } from "./firebase.mjs";
import {  createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


//.............signup..........//
var createAccountButton =document.getElementById('createacc')

createAccountButton.addEventListener('click', ()=>
    {
console.log('chal gya');
    var userEmail= document.getElementById('email').value
    var userPassword= document.getElementById('pass').value
    console.log(userEmail , userPassword);
createUserWithEmailAndPassword(auth, userEmail, userPassword)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    alert('welcome')
    window.location.href='login.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode , errorMessage);
    // ..
  });
})
