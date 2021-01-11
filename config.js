import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyClNQG56c5BDoJWUM46HRrtcfMor5pryHU",
  authDomain: "story-hub-d4304.firebaseapp.com",
  databaseURL: "https://story-hub-d4304.firebaseio.com",
  projectId: "story-hub-d4304",
  storageBucket: "story-hub-d4304.appspot.com",
  messagingSenderId: "280977608575",
  appId: "1:280977608575:web:96a1964d816aa1334ad44a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()