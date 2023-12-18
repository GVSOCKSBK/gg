$(document).ready(function() {
    $("#styleButton").click(function() {
        // Redesign the page using jQuery
        $("#content").css({
            "max-width": "800px",
            "margin": "20px auto",
            "background-color": "#f9f9f9",
            "box-shadow": "0 0 15px rgba(0, 0, 0, 0.2)"
        });

        $("h1, h2").css("color", "#4285f4");

        $("ul").css({
            "list-style-type": "square",
            "padding-left": "20px"
        });

        $("li").css("color", "#333");

        // You can add more styling changes as needed
    });
});
