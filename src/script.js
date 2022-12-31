import { initializeApp } from 'firebase/app'; 

import { getDatabase, get, set, update, child, remove, ref } from 'firebase/database'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 


const firebaseConfig = {
apiKey: "AIzaSyCLiTHL6oUhkD6Pyyx_XSqSK0KmIzwuxv8",
authDomain: "auth-practice-2ef4f.firebaseapp.com",
projectId: "auth-practice-2ef4f",
storageBucket: "auth-practice-2ef4f.appspot.com",
messagingSenderId: "559632117471",
appId: "1:559632117471:web:20e64ec55b71b1f0ca836a"
};

//! config vars: 
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 
const auth = getAuth(app); 

//! dom elements: 
let emailInput = document.querySelector('.emailInput')
let firstInput = document.querySelector('.firstInput'); 
let lastInput = document.querySelector('.lastInput'); 
let passInput = document.querySelector('.passInput'); 


const signupForm = document.querySelector('.signupForm'); 

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = emailInput.value

    const password = passInput.value

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('user created:', cred.user)
        signupForm.reset(); 
    })
    .catch((err) => {
        console.log(err.message); 
    })
})