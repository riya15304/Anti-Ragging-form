function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let num = document.forms["myForm"]["num"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (isNaN(num)) {
        alert("Enter Numeric value only");
        return false;
    }
}