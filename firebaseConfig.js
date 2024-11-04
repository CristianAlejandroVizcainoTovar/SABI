// Importa las funciones necesarias desde los SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCYe7zbqFP0iPXJOJOjHotgqGHcuNP250Q",
    authDomain: "sabi-a2632.firebaseapp.com",
    databaseURL: "https://sabi-a2632-default-rtdb.firebaseio.com",
    projectId: "sabi-a2632",
    storageBucket: "sabi-a2632.firebasestorage.app",
    messagingSenderId: "947789625213",
    appId: "1:947789625213:web:54e587e681c2a6566efe14"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar 'db' para usarlo en otros archivos
export { db };



// Ejemplo de función que usa Firestore
function addToCart(productName, price) {
    db.collection("Carrito").add({
        productName: productName,
        quantity: 1,
        price: price
    })
    .then((docRef) => {
        console.log("Producto añadido con ID: ", docRef.id);
        openModal();
    })
    .catch((error) => {
        console.error("Error al añadir producto: ", error);
    });
}


// Prueba de conexión
db.collection("prueba").get().then((snapshot) => {
    console.log("Conexión exitosa con Firebase");
}).catch((error) => {
    console.error("Error de conexión con Firebase:", error);
});
