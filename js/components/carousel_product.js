var images = JSON.parse(localStorage.getItem('imgArr'));


$(document).ready(function () {
    for (img in images) {
        $('.carousel_product').append(' <div class="image_container"> \
             <img id="imgHome_' + img + '" src="' + images[img] + '" /> \
        </div>');
    }


    $('.carousel_product').slick()
});
//# sourceURL=browsertools://js/components/carousel_product.js