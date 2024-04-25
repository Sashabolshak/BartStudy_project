$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click', "#btn", function(){
        var moreLessButton = $(this).text() === 'Read more' ? 'Read less' : 'Read more';
        $(this).text(moreLessButton);
        $(this).siblings(".content").find(".invisible-content").slideToggle();
    });
});