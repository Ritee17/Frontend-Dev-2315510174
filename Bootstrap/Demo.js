function getData(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log("Email: " + email + " Password: " + password);
    alert("Email: " + email + " Password: " + password);
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}).*$/;;
    if(email == "" || password == ""){
        alert("Please fill all the fields");
    }
    else if(!email.includes("@")){
        alert("Please enter a valid email");
    }
    else if(!email.match(emailPattern)){
        alert("Please enter a valid email format");
    }
    else if(!password.match(passwordPattern)){
        alert("Password must be at least 8 characters long and contain at least one letter and one number");
    }else{
        alert("Registeres!");
    }
}