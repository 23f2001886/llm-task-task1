document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('userFeedback').value;
    console.log('User Feedback:', feedback);
    alert('Thank you for your feedback!');
    document.getElementById('feedbackForm').reset();
});