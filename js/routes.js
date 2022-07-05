
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
    let components = "components/navbar.html";
    switch (value) {
        
        case '/about':
            components = "components/navbar.html";
            break;

        case '/':
        default:
            break;
    }

    
    $("#loadDivs").load("components/navbar.html", (params) => {
        $(getIdByPage(value)).addClass("active");
        $(getIdByPage(currentMenu)).removeClass("active");
        currentMenu = value;
    });
}