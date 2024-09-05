

// Your web app's Firebase configuration
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
    
    // Initialize variables
    const auth = firebase.auth()
    const database = firebase.database()
    
    // Set up our register function
    function register() {
      // Get all our input fields
      email = document.getElementById('email').value
      password = document.getElementById('password').value
      full_name = document.getElementById('full_name').value
    
      // Validate input fields
      if (validate_email(email) == false ||  validate_password(password) == false) {
        alert('please Enter the valid detail')
        return 
        // Don't continue running the code
      }
     
      // Move on with Auth
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          email : email,
          full_name : full_name,
          last_login : Date.now()
        }
        console.log(user_data)
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)
    
        // DOne
        
        alert('User Created!!')
        location.replace("login.html")
        
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
  
    function login () {
      // Get all our input fields
      email = document.getElementById('email').value
      password = document.getElementById('password').value
    
      // Validate input fields
      if (validate_email(email) == false  || validate_password(password) == false) {
        alert('please Enter the valid detail')
        return
        // Don't continue running the code
      }
    
      auth.signInWithEmailAndPassword(email, password)
      .then(async function() {
        // Declare user variable
        var user = auth.currentUser
        const userid = await auth.currentUser.uid;
        const email = await auth.currentUser.email;
        localStorage.setItem('current-user-id',userid);
        localStorage.setItem('current-user-email',email)
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          email : email,
          last_login : Date.now()
        }
        
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data)
    
        // DOne
        location.replace("welcome.html")
        alert('User Logged In!!')
    
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
  
    
    
    
    // Validate Functions
    function validate_email(email) {
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == true) {
        // Email is good
        return true
      } else {
        // alert ("pls enter valid email")
        return false
      }
    }
    
    function validate_password(password) {
      // Firebase only accepts lengths greater than 6
      if (password < 6) {
        return false
      } else {
        return true
      }
    }
    
    function validate_field(field) {
      if (field == null) {
        return false
      }
    
      if (field.length <= 0) {
        return false
      } else {
        return true
      }
    }
    function forgotPass(){
        const email = document.getElementById("email").value
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Password reset link sent to your email id")
        })
        .catch((error) => {
          alert("pls enter the email id")
        });
    }