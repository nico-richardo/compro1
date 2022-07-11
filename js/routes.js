var currentMenu = '/';
function getIdByPage(value) {
    switch (value) {
        case '/about':
            return ".overMenu"

        case '/shop':
            return ".shopMenu"

        case '/':
        default:
            return ".homeMenu"
    }
}

window.loadPage = (value) => {
    let components = "pages/home.html";
    switch (value) {

        case '/about':
            components = "pages/about.html";
            break;

        case '/shop':
            components = "pages/shop.html";
            break;

        case '/':
        default:
            break;
    }

    if (currentMenu !== value) {
        $("#loadDivs").load(components, () => {
            if ('/' === value) {
                $('#appContainer').addClass("homeLayout");
                $(".loadCarousel_Home").css("display", "block");
            } else {
                $('#appContainer').removeClass("homeLayout");
                $(".loadCarousel_Home").css("display", "none");
            }
            $('#checkbox_toggle').prop('checked', false);
            $(getIdByPage(currentMenu)).removeClass("active");
            $(getIdByPage(value)).addClass("active");
            currentMenu = value;
        });
    }
}