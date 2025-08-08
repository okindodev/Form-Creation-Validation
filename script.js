document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('registraion-form');
    const feedbackDiv = document.getElementById("form-feedback")
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const emailInpput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    

    let isValid = true;
    let messages = [];
    if (usernameInput.length < 3){
        isValid = false;
        messages.push("Your username is too short");
    }

    if (!emailInpput.includes('@') || !emailInpput.includes('.')){
        isValid= false;
        messages.push("Include @ or .");

    }
    if (passwordInput < 8){
        isValid = false;
    messages.push("Your password should be atleast 8 characters long");
    }

    feedbackDiv.style.display = "block";

    if (isValid){
        feedbackDiv.textContent = "Registration successful!"
        feedbackDiv.style.color = "#28a745" //bootstrap success green
    }
    else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; //bootstrap danger red
    }

    })
})