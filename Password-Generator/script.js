function generatePassword() {

    let length = parseInt(document.getElementById("length").value);

    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allChars = "";
    let password = "";

    let message = document.getElementById("message");
    message.textContent = "";

    if (!uppercase && !lowercase && !numbers && !symbols) {
        message.textContent =
            "Please select at least one character type!";
        return;
    }

    if (length < 4 || length > 30) {
        message.textContent =
            "Password length must be between 4 and 30.";
        return;
    }

    if (uppercase) allChars += upperChars;
    if (lowercase) allChars += lowerChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    for (let i = 0; i < length; i++) {

        let randomIndex =
            Math.floor(Math.random() * allChars.length);

        password += allChars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {

    let passwordField =
        document.getElementById("password");

    if (passwordField.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordField.value);

    alert("Password copied successfully!");
}