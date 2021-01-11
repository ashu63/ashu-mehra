gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});

var myTextTween = KUTE.to('#type', { text: 'Ashu Mehra' }).start();
var myTextTween = KUTE.to('#dollar', { text: 'Ashu Mehra' }).start();
 


var swiper = new Swiper('.swiper-container', {
  effect: 'flip',
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 1200,
    disableOnInteraction: false,
  },

});

gsap.from('.home__introLeft', {duration: 1.4, y:'120%', ease:'elastic', delay: 1})
gsap.from('.home__introRight', {duration: 1.4, x:'130%', ease:'slow', delay: 1})

var mymap = L.map('mymap').setView([31.949948, 75.862656], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWVocmEtc2F3YW4xMiIsImEiOiJja2pxeGZ2aWIxYnA5MnZvOGtsbGZqYzRsIn0.B9EIofyfu6C4Vpvq_G3PGg', {
maxZoom: 10,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker = L.marker([31.949948, 75.862656], 13).addTo(mymap);
marker.bindPopup("<b>Hey Man</b><br>Ashu's home is there").openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);