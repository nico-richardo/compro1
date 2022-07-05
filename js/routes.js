
var currentMenu = '/';
function getIdByPage(value) {
    switch (value) {
        case '/':
            return ".homeMenuMobile, .homeMenuDesktop"
        case '/about':
            return ".overMenu"

        default:
            return ".homeMenuMobile, .homeMenuDesktop"
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

    
    $("#loadDivs").load(components, (params) => {
        $(getIdByPage(value)).addClass("active");
        $(getIdByPage(currentMenu)).removeClass("active");
        currentMenu = value;
    });
}