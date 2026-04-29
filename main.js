$(document).ready(function () {

    // Render components
    document.getElementById("header").innerHTML = Components.header;
    document.getElementById("footer").innerHTML = Components.footer;

    // Active nav logic
    const page = document.body.dataset.page;

    $(".nav-link").each(function () {
        if ($(this).data("page") === page) {
            $(this).addClass("active");
        }
    });

});