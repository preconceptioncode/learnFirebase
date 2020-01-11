import "firebase/performance";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import App from "./App";
import "./app.css";
import * as serviceWorker from "./serviceWorker";

const config = {
  firebase_config_dev: {
    apiKey: "AIzaSyDgqoVHCCi3GSMCbXynydkBm08-m7p8Fnk",
    authDomain: "camply-development.firebaseapp.com",
    databaseURL: "https://camply-development.firebaseio.com",
    projectId: "camply-development",
    storageBucket: "camply-development.appspot.com",
    messagingSenderId: "377384394659",
    appId: "1:377384394659:web:d56a10ee500f6f08e64416",
    measurementId: "G-K4EGPSVWVN"
  },
  firebase_config: {
    apiKey: "AIzaSyBk_s6zTs-Ncyb1IpeM14rvj2S0ZA5Q2uM",
    authDomain: "camply-production.firebaseapp.com",
    databaseURL: "https://camply-production.firebaseio.com",
    projectId: "camply-production",
    storageBucket: "camply-production.appspot.com",
    messagingSenderId: "28043108944",
    appId: "1:28043108944:web:087825a6e9527d56826755",
    measurementId: "G-2S4RGZSGVK"
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAppProvider
      firebaseConfig={
        process.env.NODE_ENV !== "production"
          ? config.firebase_config_dev
          : config.firebase_config
      }
      initPerformance
    >
      <App />
    </FirebaseAppProvider>
  </StrictMode>
); // https://reactjs.org/docs/strict-mode.html

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
