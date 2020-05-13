import Firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyCTL9_0lDAsN8u372phBCUP3XnoT4lA4Go",
  authDomain: "nutrion-a67e7.firebaseapp.com",
  databaseURL: "https://nutrion-a67e7.firebaseio.com",
  projectId: "nutrion-a67e7",
  storageBucket: "nutrion-a67e7.appspot.com",
  messagingSenderId: "872110603941",
  appId: "1:872110603941:web:d9eab88a1a3f84c58e174c",
  measurementId: "G-098E4W29BK"
};
// Initialize Firebase
const app =Firebase.initializeApp(firebaseConfig);
export const db = app.database()


