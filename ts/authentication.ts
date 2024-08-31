// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, Auth, UserCredential } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK6GK3Bf1ylbrQwGGoFHd_E_pzqeAls38",
  authDomain: "phantom-aficionado-website.firebaseapp.com",
  projectId: "phantom-aficionado-website",
  storageBucket: "phantom-aficionado-website.appspot.com",
  messagingSenderId: "47737352678",
  appId: "1:47737352678:web:78ac293431a3cdafc7a627",
  measurementId: "G-JT9WWJMPRQ"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

// Event listener for login form submission
document.querySelector('input[type="submit"]')?.addEventListener('click', (e: Event) => {
    e.preventDefault(); // Prevent the default form submission

    // Retrieve the user's email and password
    const email: string = (document.querySelector('input[type="text"]') as HTMLInputElement).value;
    const password: string = (document.querySelector('input[type="password"]') as HTMLInputElement).value;

    // Sign in with Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Utilisateur connecté:', user);
        // Redirect the user or show a success message
      })
      .catch((error) => {
        const errorCode: string = error.code;
        const errorMessage: string = error.message;
        console.error('Erreur d\'authentification:', errorCode, errorMessage);
        // Show an error message to the user
      });
});
