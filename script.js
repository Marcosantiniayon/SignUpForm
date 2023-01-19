//Variable Delcarations
const emailAddress = document.querySelector('#emailAddress');
const emailAddressError = document.querySelector('#emailAddressError')
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');
const confirmPassword = document.querySelector('#confirmPassword');
const confirmPasswordError = document.querySelector('#confirmPasswordError');
const civilianRdio = document.querySelector('#civilianRdio');
const heroRdio = document.querySelector('#heroRdio');
const villainRdio = document.querySelector('#villainRdio');
const submitBtn = document.querySelector('#submitBtn');
let characterType = "Civilian";


//Validation Error Messages
emailAddress.addEventListener("input", function (event){
    if (emailAddress.validity.typeMismatch) {
        emailAddressError.textContent = 'Please enter in a valid Email. EX:(johnSmith@email.com)';}
        else{emailAddressError.textContent = '';}
    });

password.addEventListener("input", function(event){
    if(password.value == "0"){
    }else if(containsUppercase(password.value) != true && containsNumbers(password.value) != true && password.value.length < 8){
        passwordError.textContent = "Missing at least 1 capital letter. Missing at least 1 number. Password must be at least 8 characters."
    }else if(containsUppercase(password.value) != true && containsNumbers(password.value) != true){
        passwordError.textContent = "Missing at least 1 capital letter. Missing at least 1 number."
    }else if(containsUppercase(password.value) != true && password.value.length < 8){
        passwordError.textContent = "Missing at least 1 capital letter. Password must be at least 8 characters."
    }else if(containsNumbers(password.value) != true && password.value.length < 8){
        passwordError.textContent = "Missing at least 1 number. Password must be at least 8 characters."
    }else if(containsUppercase(password.value) != true){
        passwordError.textContent = "Missing at least 1 capital letter."
    }else if(containsNumbers(password.value) != true){
        passwordError.textContent = "Missing at least 1 number"
    }else if(password.value.length < 8){
        passwordError.textContent = "Password must be at least 8 characters."
    }else{
        passwordError.textContent = ""
    };
});

confirmPassword.addEventListener("input", function(event){
    if(confirmPassword.value != password.value){
        confirmPassword.setCustomValidity('Passwords do not match');
        confirmPasswordError.textContent = "Passwords do not match."
    }else {
        confirmPassword.setCustomValidity('');
        confirmPasswordError.textContent = ""
    }
});

civilianRdio.addEventListener("input", function(event){
    if(civilianRdio.checked == true){
        characterType = "Civilian";
    }else {}
});

heroRdio.addEventListener("input", function(event){
    if(heroRdio.checked == true){
        characterType = "Hero";
    }else {}
});

villainRdio.addEventListener("input", function(event){
    if(villainRdio.checked == true){
        characterType = "Villain";
    }else {}
});

// Test-for Functions
function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

  function containsNumbers(str) {
    return /\d/.test(str);
  }