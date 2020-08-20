$(document).on("click", "#uc-more-group-search", function() { 
    $("#group_count").val(-100);
    $("html, body").animate({
        scrollTop: $(".categoryBox.all-groups").last().offset().top + $(".categoryBox.all-groups").last().height()
    }, 2e3)
})