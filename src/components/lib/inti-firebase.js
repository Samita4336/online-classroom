import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARumemuFZ2R0HSahJ1vQSdbccH5F8Mae0",
  authDomain: "online-class-room-7187d.firebaseapp.com",
  databaseURL: "https://online-class-room-7187d-default-rtdb.firebaseio.com",
  projectId: "online-class-room-7187d",
  storageBucket: "online-class-room-7187d.appspot.com",
  messagingSenderId: "863432666281",
  appId: "1:863432666281:web:5905dab3e20bd9c8628db8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
