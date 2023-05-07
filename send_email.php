<?php
if(isset($_POST['submit'])) {
  // Sanitize inputs
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  // Validate inputs
  $errors = array();
  if(empty($name)) {
    $errors[] = "Name field is required.";
  }
  if(empty($email)) {
    $errors[] = "Email field is required.";
  }
  if(empty($message)) {
    $errors[] = "Message field is required.";
  }
  if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Email address is not valid.";
  }

  if(empty($errors)) {
    // Send email
    $to = "pjotmv@gmail.com";
    $subject = "New message from " . $name;
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);
    echo "Your message has been sent successfully.";
  } else {
    // Display errors
    echo "<ul>";
    foreach($errors as $error) {
      echo "<li>" . $error . "</li>";
    }
    echo "</ul>";
  }
}
?>