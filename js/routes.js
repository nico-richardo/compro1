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

    if (currentMenu !== value) {
        $("#loadDivs").load(components, () => {
            $('#checkbox_toggle').prop('checked', false);
            $(getIdByPage(currentMenu)).removeClass("active");
            $(getIdByPage(value)).addClass("active");
            currentMenu = value;
        });
    }
}