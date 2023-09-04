      function sendEmail() {
        var email = $("#email");
        var subject = $("#subject");
        var message = $("#message");
        var loadingOverlay = $("#loadingOverlay");

        if (isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(message)) {
          loadingOverlay.show(); // Show the loading overlay

          $.ajax({
            url: "send_mail.php",
            method: "POST",
            dataType: "json",
            data: {
              email: email.val(),
              subject: subject.val(),
              body: message.val(),
            },
            success: function (response) {
              $("#myForm")[0].reset();
            },
            error: function (xhr, status, error) {
              toastr.error("Error sending message.");
            },
            complete: function () {
              setTimeout(function () {
                loadingOverlay.hide();
              }, 1000);
              toastr.success("Message Sent Successfully.");
            },
          });
        }
      }

      function isNotEmpty(caller) {
        if (caller.val() == "") {
          caller.css("border", "1px solid red");
          return false;
        } else caller.css("border", "");

        return true;
      }
