import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDS6VLr9VewR5cLKHraUiUkQNKRW2u7qGs",
  authDomain: "lenscraft-77a6f.firebaseapp.com",
  projectId: "lenscraft-77a6f",
  storageBucket: "lenscraft-77a6f.appspot.com",
  messagingSenderId: "553783075966",
  appId: "1:553783075966:web:9933acb202c8da56e6642f",
  measurementId: "G-FH1M2JF7BT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

