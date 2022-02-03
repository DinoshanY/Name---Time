import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7vlUG5S-Cth3nqTbJe8lSPN8nJqvKK4M",
  authDomain: "daxoppgave-d27ea.firebaseapp.com",
  projectId: "daxoppgave-d27ea",
  storageBucket: "daxoppgave-d27ea.appspot.com",
  messagingSenderId: "280867433207",
  appId: "1:280867433207:web:0ec134933e086f83c741f2",
  measurementId: "G-ZBS58HEFP4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, app, addDoc };
