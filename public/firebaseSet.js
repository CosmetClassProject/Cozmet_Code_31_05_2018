
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);
console.log(firebase);

let database = firebase.database();


  //Listen to the status change,if in sign_out status, user is null
//callback func, run with window onload
var initApp = function(){
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            if(user.emailVerified){
                email = user.email;
                uid = user.uid;
                console.log("sign in status."+email);
            }
            else
                console.log("sign in status but without email verification.");
            console.log("email verifity: "+user.emailVerified);
        }
        else
            console.log("sign out status.")
    });
}




//window.onload -- all pic are loaded, which is later than document.ready()
window.onload = initApp();
