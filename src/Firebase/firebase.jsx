import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";


const apiKey = import.meta.env.VITE_REACT_APP_FB_API_KEY;
const Domain = import.meta.env.VITE_REACT_APP_FB_DOMAIN;
const project = import.meta.env.VITE_REACT_APP_FB_PROJECT;
const bucket = import.meta.env.VITE_REACT_APP_FB_BUCKET;
const sender = import.meta.env.VITE_REACT_APP_FB_SENDER;
const idApp = import.meta.env.VITE_REACT_APP_FB_ID_APP;
const measurement = import.meta.env.VITE_REACT_APP_FB_MEASUREMENY;

const firebaseConfig = {
    apiKey: `${apiKey}`,
    authDomain: `${Domain}`,
    projectId: `${project}`,
    storageBucket: `${bucket}`,
    messagingSenderId: `${sender}`,
    appId: `${idApp}`,
    measurementId: `${measurement}`
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */),
    isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
});


export default { storage, app, analytics };
