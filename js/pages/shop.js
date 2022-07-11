var dummyDatas = [
    {
        srcImg: 'assets/images/pexels-alena-shekhovtcova-6995891.jpg',
        title: "Productnaam",
        price: "€80"
    },
    {
        srcImg: 'assets/images/pexels-anete-lusina-6354084.jpg',
        title: "Productnaam",
        price: "€80"
    },
    {
        srcImg: 'assets/images/pexels-cottonbro-5747901.jpg',
        title: "Productnaam",
        price: "€80"
    },
    {
        srcImg: 'assets/images/pexels-danielle-reese-2496029.jpg',
        title: "Productnaam",
        price: "€80"
    }
]

dummyDatas.forEach((data, index) => {
    $('#cardlist_container').append(`<div id="${'card' + index}" class="card_container"></div>`);


    $(`#card` + index).load('components/card.html', () => {
        $("#card" + index + " img").attr("src", data.srcImg);
        $('#card' + index + " .title").text(data.title);
        $('#card' + index + " .price").text(data.price);
    })
});