import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAhvWrJv1S8z7eXvJuDvv6i3xdiBK4CGr0",
  authDomain: "peppy-strategy-338202.firebaseapp.com",
  databaseURL: "https://peppy-strategy-338202-default-rtdb.firebaseio.com",
  projectId: "peppy-strategy-338202",
  storageBucket: "peppy-strategy-338202.appspot.com",
  messagingSenderId: "806119299024",
  appId: "1:806119299024:web:5a16c230a4454a6cf14bd5",
  measurementId: "G-YYM5ELVQGQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
