import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
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
    if (!app.apps.length) {
      app.initializeApp(config);
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.ref = app.storage().ref();
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSendEmailVerification = () => this.auth.currentUser.sendEmailVerification();

  doSignOut = () => {
    this.auth.signOut();
    AuthService.logout();
  }

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);


  // Users

  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');

  currentUser = () => this.auth.currentUser;


  lists = () => this.db.collection('lists');

  favorites = () => this.db.collection('favorites');


   getLists = async () => {
     try {
       const response = await this.lists().where('author', '==', this.currentUser().uid).get();
       return response;
     } catch (error) {
       return error;
     }
   }

   createList = async (list) => {
     try {
       const response = await this.lists().add(list);
       return response;
     } catch (error) {
       console.error('Error adding document: ', error);
       return error;
     }
   }

   deleteList = async (listID) => {
     try {
       await this.lists().doc(listID).delete();
       console.log('Document successfully deleted!');
     } catch (error) {
       console.error('Error removing document: ', error);
     }
   }
}

export default Firebase;
