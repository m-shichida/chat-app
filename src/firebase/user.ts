import firebase from 'firebase';
import { firebaseApp } from './config';

export const loginAsAnonymousUser = () => {
  firebaseApp.auth().signInAnonymously().catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`エラーが発生しました。エラーコード${ errorCode }:${ errorMessage }`)
  });

  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      const uid = user.uid;
      const name = `ゲストユーザー${ uid }`
      alert(`${ name }としてログインしました。`)
    }
  });
}

// Googleアカウントでログイン
export const loginAsGoogleAccount = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebaseApp.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    if(user) {
      const uid = user.uid
      const name = user.displayName;
      const image = user.photoURL
      return { uid, name, image }
    }
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`エラーが発生しました。エラーコード${ errorCode }:${ errorMessage }`)
  });
}
