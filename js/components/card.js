$(function () {
    $("div[id^=card] .gallery").unbind().on('click', function (e) {
        const currCardId = e.target.closest("div[id^=card]").id;
        const parameter = currCardId.match(/card(\d+)/)[1];
        //CAN CALL API HERE, BEFORE MOVE PAGE
        window.loadPage('/shop/' + parameter);
    });
});