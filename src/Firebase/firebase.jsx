// import firebase from "firebase/app";
// import "firebase/storage";
//
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID",
// };
//
// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
//
// export default storage;
const apiKey = import.meta.env.VITE_REACT_APP_FB_API_KEY;
const Domain = import.meta.env.VITE_REACT_APP_FB_DOMAIN;
const project = import.meta.env.VITE_REACT_APP_FB_PROJECT;
const bucket = import.meta.env.VITE_REACT_APP_FB_BUCKET;
const sender = import.meta.env.VITE_REACT_APP_FB_SENDER;
const idApp = import.meta.env.VITE_REACT_APP_FB_ID_APP;
const measurement = import.meta.env.VITE_REACT_APP_FB_MEASUREMENY;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: `${apiKey}`,
    authDomain: `${Domain}`,
    projectId: `${project}`,
    storageBucket: `${bucket}`,
    messagingSenderId: `${sender}`,
    appId: `${idApp}`,
    measurementId: `${measurement}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;