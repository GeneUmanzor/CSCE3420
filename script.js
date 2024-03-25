document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to handle form submission, e.g., sending data to server
    alert('Thank you for your message!');
    document.getElementById('contact-form').reset();
});
