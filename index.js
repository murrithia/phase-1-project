<script>
  document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the value of the email input field
    var email = document.getElementById("emailInput").value;

    // You can add client-side validation here if needed

    // Send the email address to the server for processing
    fetch('/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => {
      if (response.ok) {
        alert("Allan will receive your email soon thankyou");
        // Optionally, you can reset the form after successful submission
        document.getElementById("emailForm").reset();
      } else {
        alert("Failed to submit. Please try again later.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Failed to submit. Please try again later.");
    });
  });
</script>

  