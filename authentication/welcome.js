var firebaseConfig = {
    apiKey: "AIzaSyD2Dd_AI2u4TaWbNrgvpwTRxuVLRKfmR5Q",
    authDomain: "invy-64212.firebaseapp.com",
    databaseURL: "https://invy-64212-default-rtdb.firebaseio.com",
    projectId: "invy-64212",
    storageBucket: "invy-64212.appspot.com",
    messagingSenderId: "323251925750",
    appId: "1:323251925750:web:3eb3b245948e58d41372d7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        window.location.replace("../dashboard/dashboard.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})
function started(){
    location.replace("../dashboard/dashboard.html")
}