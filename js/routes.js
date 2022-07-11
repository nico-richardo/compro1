var currentMenu = '/';
function getIdByPage(value) {

    //HANDLE /shop/::itemId
    if (value.indexOf("/shop") !== -1 && value.length > 5) {
        return '.shopMenu';
    }

    switch (value) {
        case '/about':
            return ".overMenu";

        // TO HANDLE /shop 
        case '/shop':
            return ".shopMenu";

        case '/contact':
            return ".contactMenu";

        case '/':
        default:
            return ".homeMenu";
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
        
        case '/contact' :
            components = "pages/contact.html";
            break;

        case '/':
        default:
            break;
    }

    if (value.indexOf("/shop") !== -1 && value.length > 5) {
        components = "pages/item.html";
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