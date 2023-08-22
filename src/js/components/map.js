// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.762090, 37.608808],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 13,
    controls: []
  });

  // Создание геообъекта с типом точка (метка).
  var myPlacemark = new ymaps.Placemark([55.769697, 37.638907], {}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: 'img/marker.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('zoomControl');
};

const closeMapText = document.querySelector('.contacts__close-btn');
const mapText = document.querySelector('.contacts__map-text-wrapper');

closeMapText.addEventListener('click', () => {
  mapText.classList.add('contacts__map-text-wrapper--hidden')
})
