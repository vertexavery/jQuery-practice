$(document).ready(function () {
    $("#listwrapper ul li").mouseenter(function () {
        $(this).fadeTo('fast', 0.5);
    });

    $('#listwrapper ul li').mouseleave(function () {
        $(this).fadeTo('fast   ', 1);
    });

    $('#menu').click(function () {
        $('#listwrapper').toggle('blind', 'fast');
    });
});