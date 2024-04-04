function getFormvalue() {
    // Get the form element
    var form = document.getElementById('form1');

    // Get the value of the first name input field
    var firstName = form.elements['fname'].value.trim();

    // Get the value of the last name input field
    var lastName = form.elements['lname'].value.trim();

    // Check if last name contains a space to handle cases with middle name
    if (lastName.includes(' ')) {
        // Split the last name by space to get individual parts
        var lastNameParts = lastName.split(' ');
        // Take the first part as the last name
        lastName = lastNameParts[lastNameParts.length - 1];
    }

    // Concatenate first name and last name
    var fullName = firstName + ' ' + lastName;

    // Display the full name in an alert
    alert(fullName);

    // Prevent the form from submitting and refreshing the page
    return false;
}
