function login() {
    const username = document.getElementById('Username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    let repeatPassword = document.getElementById("Password2").value;

    if (username !== "" && email !== "" && password !== "" && repeatPassword !== ""  &&  phoneNumber !== "") {
        if (password === repeatPassword) {
            alert("Saved Changes!");
            window.location = "profile.html";
        } else {
            alert("Passwords do not match.");
        }
    } else {
        alert("Please complete the forms.");
    }
}