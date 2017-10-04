import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAzdoAjlM9YlQ-gl8VRayCxtJbnrl9qDsw",
  authDomain: "nuxt-firebase-auth.firebaseapp.com",
  databaseURL: "https://nuxt-firebase-auth.firebaseio.com",
  projectId: "nuxt-firebase-auth",
  storageBucket: "nuxt-firebase-auth.appspot.com",
  messagingSenderId: "316484287956"
};

firebase.initializeApp(config);
// firebase.auth().onAuthStateChanged(user => {
//   if (user != null) {
//     app.$store.commit('setActiveUser', user)
//     // resolve(user)
//   }
//   // return resolve();
// });

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const GithubProvider = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
