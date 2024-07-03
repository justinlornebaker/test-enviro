function submitFeedback() {

    // Pull values from form elements and assign to variables

    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Fire alert when user submits form

    alert('Thank you for your valuable feedback')

    // Replace text content of elements with user input responses

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
 
    // Unhide previously hidden user info block 

    document.getElementById('userInfo').style.display = 'block';

}

// Assign submit button element to variable

    const submitButton=document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

// Submit form if user presses ENTER key at any time while filling out the form

document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });