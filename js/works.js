$(document).ready(function(){
$(".positioning").find("span").click(function () {
        var target = $(this).data("target");
        var x = $("#"+target).offset().top;
        $('html,body').animate({
            scrollTop: x
        }, 400);
});
});
