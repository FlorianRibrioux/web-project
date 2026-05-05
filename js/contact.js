function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

submitInformation = function() {
    if (document.getElementById("name").value == "" 
    || document.getElementById("surname").value == ""
    || document.getElementById("email").value == ""
    || document.getElementById("message").value == "") {
        return;
    }

    if (!validateEmail(document.getElementById("email").value)) {
        return;
    }

    alert("Thank you for contacting us! We will get back to you as soon as possible.");
}

