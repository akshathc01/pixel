import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD7cLHyGWjMPksDFZU0flg4qfM_SwKUgyU",
    authDomain: "pixel-image-uploader.firebaseapp.com",
    projectId: "pixel-image-uploader",
    storageBucket: "pixel-image-uploader.appspot.com",
    messagingSenderId: "711387755893",
    appId: "1:711387755893:web:f3d3f0b42a12351f72cf3c",
    measurementId: "G-RBXCPQY3K8"
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
