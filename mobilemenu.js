$(document).ready(function () {
    $("#navigation").click(function () {

        $('#content').css('min-height', $(window).height());

        var contentWidth = $('#content').width();

        $('#content').css('width', contentWidth);

        $('#contentLayer').css('display', 'block');

        $('#container').bind('touchmove', function (e) {
            e.preventDefault()
        });
        $("#container").animate({"marginLeft": ["30%", 'easeOutExpo']}, {
            duration: 700
        });
        $('nav').css('opacity', 1);

    });

    $("#contentLayer").click(function () {

        $('#container').unbind('touchmove');
        $("#container").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                $('#content').css('width', 'auto');
                $('#contentLayer').css('display', 'none');
                $('#content').css('min-height', 'auto');

            }
        });
        $('nav').css('opacity', 0);
    });

});
