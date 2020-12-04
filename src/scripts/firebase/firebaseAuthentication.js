import firebase from 'firebase/app'
import 'firebase/auth'

const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => console.log("Successfully logged in with Google", result.user))
        .catch(error => console.error("There was a sign-in error with Google: ", error))
}
 const googleSignOut = () => {
    firebase.auth().signOut()
        .then( ()=> {
            console.log("User signed out.")
        })
        .catch(error => console.error("Oops, something went awry.", error))
 }
module.exports = {
    googleSignIn,
    googleSignOut
}