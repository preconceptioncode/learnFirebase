import "firebase/performance";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import App from "./App";
import "./app.css";
import * as serviceWorker from "./serviceWorker";

const config = {
  apiKey: "AIzaSyA-MbWJTNFlkDPDPPGtvyKsbqTYk0d1TaE",
  authDomain: "learnfirebase-10265.firebaseapp.com",
  databaseURL: "https://learnfirebase-10265.firebaseio.com",
  projectId: "learnfirebase-10265",
  storageBucket: "learnfirebase-10265.appspot.com",
  messagingSenderId: "723604256172",
  appId: "1:723604256172:web:56df029d5c6604b9adb609",
  measurementId: "G-HZJ15K8CPP"
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={config} initPerformance>
      <App />
    </FirebaseAppProvider>
  </StrictMode>
); // https://reactjs.org/docs/strict-mode.html

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
