$(document).ready(function () {

    // Components
    $("#page-loader").html(Components.pageLoader);
    $("#header").html(Components.header);
    $("#footer").html(Components.footer);

    // Active nav
    const page = $("body").data("page");
    $(".nav-link").each(function () {
        if ($(this).data("page") === page) {
            $(this).addClass("active");
        }
    });

});

$(window).on("load", function () {
    $("#page-loader").fadeOut(300, function () {
        $(this).addClass("d-none");
    });
    $(".root").removeClass("d-none");
    $("body").addClass("loaded");

});