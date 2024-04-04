function getFormvalue() {
    // Get the form element
    var form = document.getElementById('form1');

    // Get the value of the first name input field
    var firstName = form.elements['fname'].value.trim();

    // Get the value of the last name input field
    var lastName = form.elements['lname'].value.trim();

    // Split the last name by space to handle cases with middle names
    var lastNameParts = lastName.split(' ');

    // Take the last part as the last name
    var lastName = lastNameParts.pop();

    // Concatenate the remaining parts of the last name (if any) as the first name
    var firstName = firstName + (lastNameParts.length > 0 ? ' ' + lastNameParts.join(' ') : '');

    // Concatenate first name and last name
    var fullName = firstName + ' ' + lastName;

    // Display the full name in an alert
    alert(fullName);

    // Prevent the form from submitting and refreshing the page
    return false;
}
