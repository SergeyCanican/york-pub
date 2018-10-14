$(function () {
    $('#slider').fotorama({
        loop:true,
        nav:'dots',
        fit:'cover',
        transition:'slide',
        autoPlay: 2750, /*2750*/
        keyboard:true,
        arrows:true,
        click:true,
        swipe:true,
        allowfullscreen:true,
        margin: 0,
    });
});
