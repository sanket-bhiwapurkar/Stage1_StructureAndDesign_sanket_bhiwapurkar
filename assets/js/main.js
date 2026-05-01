$(document).ready(function () {

    // Render components
    document.getElementById("page-loader").innerHTML = Components.pageLoader;
    document.getElementById("header").innerHTML = Components.header;
    document.getElementById("footer").innerHTML = Components.footer;

    // Page Loader
    $(window).on("load", function () {
        $("#page-loader").addClass("d-none");
    });

    // Active nav logic
    const page = document.body.dataset.page;
    $(".nav-link").each(function () {
        if ($(this).data("page") === page) {
            $(this).addClass("active");
        }
    });

});