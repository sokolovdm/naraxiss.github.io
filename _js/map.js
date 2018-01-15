$(document).ready(function() {
    

    $('#map').on('click', function(){
    	$('#map').addClass('map-inited');
    	setTimeout(function(){
    		if ($('#map').hasClass('map-inited')) {
    			ymaps.ready(initContactsMap);
    		}
    		
    	}, 600)
    	
    })
    function initContactsMap() {
        var myMap = new ymaps.Map("map", {

            center: [48.475807, 44.780019],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        })
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),


            myPlacemarkWithContent = new ymaps.Placemark([48.475807, 44.780019], {

            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '/img/ico8.png',
                // Размеры метки.
                iconImageSize: [30, 41],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -41],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                // iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects

            .add(myPlacemarkWithContent);

    }
})