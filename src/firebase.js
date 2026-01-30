// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, addDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTM1qzG_D6LMQyAkU54g_pVeYYEr8LRLY",
  authDomain: "react-prueba-e6047.firebaseapp.com",
  projectId: "react-prueba-e6047",
  storageBucket: "react-prueba-e6047.firebasestorage.app",
  messagingSenderId: "755894314640",
  appId: "1:755894314640:web:c19001192e2e70a6389a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getItems () {
  try {
    const querySnapshot = await getDocs(collection(db,'items'))
    const items = []
    querySnapshot.forEach((doc) => {
      items.push({
        id:doc.id, 
        ...doc.data()
      })
    })
    return items
  } catch (error) {
    console.error(`Error al obtener los items: ${error}`)
    return []
  }
}
export async function addNewItem (item) {
  const collectionRef = collection(db,'items')
  try {
    const docRef = await addDoc(collectionRef,item)
    console.log("Item agregado con ID",docRef.id)
    return {
      ok:true, 
      id:docRef.id
    }
  } catch (error) {
    console.error("No se pudo agregar el item:",error)
    return {
      ok:false, 
      id:null
    }
  }
}
export async function createOrder(order) {
  const collectionRef = collection(db,'ordenes')
  try {
    const docRef = await addDoc(collectionRef,order)
    console.log("Orden agregada con ID",docRef.id)
    return {
      ok:true,
      id:docRef.id,
    }
  } catch (error) {
    console.error("No se pudo crear la orden:",error)
    return {
      ok:false,
      id:null
    }
  }
}