$(function () {
    const $loginFormSubmit = $("#loginFormSubmit");
    const $loginForm = $("#loginForm");

    $loginForm.on("submit", function (e) {
        e.preventDefault();
    });

    $loginFormSubmit.on("click", function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "login",
            dataType: "json",
            async: true,
            data: {
                email: $("#loginEmail").val(),
                password: $("#loginPassword").val()
            },
            success: function (user) {
                location.reload();
                $.get("index");
                $("#loginModal").modal("hide");
            },
            error: function (er) {
                $("#loginFormUserValidationError").text("Incorect!");
                $("#loginFormUserValidationError").val("Incorect!");
                $("#loginFormUserValidationError").css("color", "red");
            }
        });
    });
});
