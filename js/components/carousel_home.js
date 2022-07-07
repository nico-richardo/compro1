var images = [
    'assets/images/pexels-alena-shekhovtcova-6995891.jpg',
    'assets/images/pexels-anete-lusina-6354084.jpg',
    'assets/images/pexels-cottonbro-5747901.jpg',
    'assets/images/pexels-danielle-reese-2496029.jpg',
];


$(document).ready(function () {
    for (img in images) {
        $('.carousel_home').append(' <div class="image_container"> \
             <img id="img_' + img + '" src="' + images[img] + '" /> \
        </div>');
    }


    $('.carousel_home').slick({
        vertical: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: false,
        arrows:false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                }
            }
        ]
    })
});