import app from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: 'AIzaSyC2fs54th_CGIIoW3yzF2kBCW3Fkz0KECo',
  authDomain: 'myfilmsreview.firebaseapp.com',
  databaseURL: 'https://myfilmsreview.firebaseio.com',
  projectId: 'myfilmsreview',
  storageBucket: '',
  messagingSenderId: '720498637533',
  appId: '1:720498637533:web:8f0ef93b67a8837eb93934',
  measurementId: 'G-2PCX6LBYXR'
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    // this.db = app.database();


    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
}

export default Firebase;
