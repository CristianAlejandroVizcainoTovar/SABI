
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

   // Inicializa Firebase
   const app = firebase.initializeApp(firebaseConfig);
   const auth = firebase.auth();
   const database = firebase.database();
 
   // Función de inicio de sesión
   function login() {
       const email = document.getElementById('login-email').value;
       const password = document.getElementById('login-password').value;
 
       auth.signInWithEmailAndPassword(email, password)
           .then((userCredential) => {
               const user = userCredential.user;
               alert('Inicio de sesión exitoso');
               // Redirige o muestra contenido según el caso
           })
           .catch((error) => {
               const errorMessage = error.message;
               alert('Error de inicio de sesión: ' + errorMessage);
           });
   }
 
   // Función de registro
   function register() {
       const email = document.getElementById('register-email').value;
       const password = document.getElementById('register-password').value;
 
       auth.createUserWithEmailAndPassword(email, password)
           .then((userCredential) => {
               const user = userCredential.user;
               alert('Registro exitoso');
               // Guarda datos adicionales del usuario en la base de datos
               database.ref('users/' + user.uid).set({
                   email: email
               });
           })
           .catch((error) => {
               const errorMessage = error.message;
               alert('Error de registro: ' + errorMessage);
           });
   }
