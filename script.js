function isValidPassword(password) {
    const minLength = 8;
    const lowerCase = /[a-z]/.test(password);
    const upperCase = /[A-Z]/.test(password);
    const digit = /\d/.test(password);
    const specialChar = /[@#$%^&+=]/.test(password);

    return (
        password.length >= minLength &&
        lowerCase &&
        upperCase &&
        digit &&
        specialChar
    );
}

function checkPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const messageElement = document.getElementById("message");

    // Check if passwords match
    if (password !== confirmPassword) {
        messageElement.style.color = "red";
        messageElement.textContent = "Passwords do not match.";
        return; 
    }

    let isValid; 

    // Check if the password is valid
    do {
        isValid = isValidPassword(password); 

        if (isValid) {
            messageElement.style.color = "green";
            messageElement.textContent = "Password is valid.";
            // Exit the loop if valid
            break; 
        } else {
            messageElement.style.color = "red";
            messageElement.textContent = "Password is invalid. It must meet the criteria.";
            break;  
        }
    } 
    // The loop continues until a valid password is confirmed
    while (!isValid); 
}
function reset(){
    document.getElementById("password").value="";
    document.getElementById("confirm-password").value="";
    document.getElementById("message").textContent="";


}