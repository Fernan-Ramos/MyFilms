import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import AuthService from '../js/services/api/AuthService';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENET_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();

    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSendEmailVerification = () => this.auth.currentUser.sendEmailVerification();

  doSignOut = () => {
    this.auth.signOut();
    AuthService.logout();
  }


  // Users

  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');

  asd = () => app.auth().currentUser;

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  favorites = () => this.db.collection('favorites');
}

export default Firebase;
