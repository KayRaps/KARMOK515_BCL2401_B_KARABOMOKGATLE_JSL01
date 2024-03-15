function validateSyntax() {
    let petInput = document.getElementById('petInput').value.trim();
    let regex = /^pet_\d+[a-zA-Z]+$/;
    let isValid = regex.test(petInput);

    // Validation logic goes here

    let resultElement = document.getElementById("result"); // Placeholder for validation result

    if (isValid) {
        resultElement.innerHTML = "Valid Syntax. 🟢" 

    } else {
        resultElement.innerHTML = "Invalid Syntax. 🔴"
    }
}


