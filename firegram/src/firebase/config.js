import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyDvKr2Va499VAzoinZ3ablUqrobVQtRKXo",
    authDomain: "firegram-b1a62.firebaseapp.com",
    projectId: "firegram-b1a62",
    storageBucket: "firegram-b1a62.appspot.com",
    messagingSenderId: "334603345971",
    appId: "1:334603345971:web:5f523166d4e5250e634346",
    measurementId: "G-E4K3LD601C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage, projectFirestore};