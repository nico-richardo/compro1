var currentMenu = '/';
function getIdByPage(value) {
    switch (value) {
        case '/about':
            return ".overMenu"

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

        case '/':
        default:
            break;
    }


    $("#loadDivs").load(components, () => {
        $('#checkbox_toggle').prop('checked', false);
        $(getIdByPage(value)).addClass("active");
        $(getIdByPage(currentMenu)).removeClass("active");
        currentMenu = value;
    });
}