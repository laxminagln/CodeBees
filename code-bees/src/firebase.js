import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBRGliH7FnxVFqaL36vKM5L5l4qlL4e3tg",
  authDomain: "code-bees-84f52.firebaseapp.com",
  databaseURL: "https://code-bees-84f52.firebaseio.com",
  projectId: "code-bees-84f52",
  storageBucket: "code-bees-84f52.appspot.com",
  messagingSenderId: "1095726782046",
  appId: "1:1095726782046:web:8b96fc305eb8e59c3646cf",
  measurementId: "G-Y3F11M9FF3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
