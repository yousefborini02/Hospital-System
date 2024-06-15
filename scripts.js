 // Retrieve the 'users' data from the local storage, and parse it from JSON format to JavaScript array.
 window.addEventListener("load", function() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.forEach(function(user) {
        createCard(user);
    });
});

// Rest of your code remains unchanged
function Patients(name,email, password, Date, Gender,phone, Chronic) {
    this.name = name;
    this.email=email;
    this.password = password;
    this.Date = Date;
    this.Gender = Gender;
    this.Chronic = Chronic;
    this.phone=phone;
}

document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();

    let name = document.getElementById("full-name").value.trim();
    let password = document.getElementById("password").value;
    let date = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value.trim();
    let chronicDisease = document.getElementById("chronic-disease").value;


     // Regular expressions for validation
     var usernameRegex = /^\S+$/;
     var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
     var birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     var phoneRegex = /^07\d{8}$/;
 
     // Validation checks
     var isValid = true;
     if (!usernameRegex.test(name)) {
         isValid = false;
         alert("Username must not contain spaces.");
     }
     if (!passwordRegex.test(password)) {
         isValid = false;
         alert("Password must be at least 8 characters long and contain at least one number, uppercase letter, and special character.");
     }
     if (!birthdayRegex.test(date)) {
         isValid = false;
         alert("Please enter a valid date of birth in the format YYYY-MM-DD.");
     }
     if (!emailRegex.test(email)) {
         isValid = false;
         alert("Please enter a valid email address.");
     }
     if (!phoneRegex.test(phone)) {
         isValid = false;
         alert("Phone number must be 10 digits starting with 07.");
     }
 
     // If all fields are valid, proceed with form submission
     if (isValid) {
        let object = new Patients(name, email,password, date, gender,phone, chronicDisease);

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(object);
    localStorage.setItem("users", JSON.stringify(users));

    createCard(object);
     }

   
});

function createCard(patient) {
    let cardContainer = document.getElementById("card-container");

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let namePara = document.createElement("p");
    namePara.innerHTML = "Name: " + patient.name;

    let emailPara = document.createElement("p");
    emailPara.innerHTML = "Email: " + patient.email;

    let passwordPara = document.createElement("p");
    passwordPara.innerHTML = "Password: " + patient.password;

    let datePara = document.createElement("p");
    datePara.innerHTML = "Date of Birth: " + patient.Date;

    let genderPara = document.createElement("p");
    genderPara.innerHTML = "Gender: " + patient.Gender;

    let phonePara = document.createElement("p");
    phonePara.innerHTML = "Phone: " + patient.phone;

    let chronicPara = document.createElement("p");
    chronicPara.innerHTML = "Chronic Disease: " + patient.Chronic;

let userImage=document.createElement("img");
userImage.setAttribute("src","image/user.png");
cardDiv.appendChild(userImage);

    cardDiv.appendChild(namePara);
    cardDiv.appendChild(emailPara);
    cardDiv.appendChild(passwordPara);
    cardDiv.appendChild(datePara);
    cardDiv.appendChild(genderPara);
    cardDiv.appendChild(chronicPara);
    cardDiv.appendChild(phonePara);

    cardContainer.appendChild(cardDiv);
    document.getElementById("form").reset();//to clear the form
}

// localStorage.clear(); //to clear the localStorage