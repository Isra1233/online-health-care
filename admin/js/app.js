let login = () => {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result) => {

        console.log(result);
            if(email.value == "admin123@gmail.com"){
                window.location.href = "home.html"
            }else{
                console.log("Login Failed");
            }
    })

    .catch(function (error){
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        alert(errorMessage)
    })
}

function signUp(){
    var name = document.getElementById("name").value;
    var genderType = document.getElementById("gender");
    var getgenderType = genderType.options[genderType.selectedIndex].value;
    var dateOfBirth = document.getElementById("dob").value;
    var phoneNumber = document.getElementById("number").value;
    var emailAddress = document.getElementById("email"). value;

    var table_registeration = firebase.database().ref('registeration');
    var key = table_registeration.push().key;

    var registeration = {
             key: key,
             name: name,
             gender: getgenderType,
             dateOfBirth: dateOfBirth,
             phoneNumber: phoneNumber,
             emailAddress: emailAddress,
      }
        table_registeration.child(key).set(registeration);

		alert("Form Submitted.");
		window.location.href = "home.html";
}
