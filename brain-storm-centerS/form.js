// when the page is loaded,  execute the following function
$(document).ready(function () {
  // When submitting the form (using form id)
  $("#formulaire").submit(function (e) {
    // any action of the page are block(loading when submitting a form)

    e.preventDefault();

    //  delete the class that puts the red message
    $(".error").remove();
    // Recovering values form fields
    var names = $("#names").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // check if the name field does not contain a character
    if (names === "") {
      // error message
      $("#names").after('<div class="error">Username cannot be blank</div>');
    }

    // check if the textarea does not contain a character
    if (message.length < 1) {
      // error message
      $("#message").after('<div class="error">required field</div>');
    }
    // check if the email does not contain a character
    if (email.length < 1) {
      // error message
      $("#email").after('<div class="error">required field</div>');
      // Check if the email address respects the norm
      var regEx =
        /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx(email);
      alert(validEmail);
      if (!validEmail) {
        $("#email").after('<div class="error">Enter a valid email</div>');
      }
    }
    if (names.length > 1 && message.length > 1 && message.length > 1) {
      $("#formulaire")[0].reset();
    }
  });
});
