<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["email"])) {
  $to = "allanmuriithi441@gmail.com";
  $subject = "New Subscriber";
  $message = "Email: " . $_POST["email"];
  
  // Send the email
  if (mail($to, $subject, $message)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
} else {
  http_response_code(400);
}
?>
