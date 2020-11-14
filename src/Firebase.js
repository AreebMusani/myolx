import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAt2d8N1iwcNEMNO1jD4XuqPoHiyqMjyl0",
    authDomain: "reactproject-3499d.firebaseapp.com",
    databaseURL: "https://reactproject-3499d.firebaseio.com",
    projectId: "reactproject-3499d",
    storageBucket: "reactproject-3499d.appspot.com",
    messagingSenderId: "424869273567",
    appId: "1:424869273567:web:3cf6c4e4215f3fecfcae6a"
}

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase

// export default firebase.initializeApp(firebaseConfig);