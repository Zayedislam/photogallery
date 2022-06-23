import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyBNIi8y-ZngN52o-JbLJX2XwydsF5VR3iY",
    authDomain: "photo-gallery-29659.firebaseapp.com",
    projectId: "photo-gallery-29659",
    storageBucket: "photo-gallery-29659.appspot.com",
    messagingSenderId: "627253736570",
    appId: "1:627253736570:web:4969e0546535749ad737c3"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const projectStorage =firebase.storage();
const projectFirestore =firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

