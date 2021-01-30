var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("container").style.display = "none";
  document.getElementById("home").style.display = "block";
}

var elemets = document.querySelector('svg').children;

anime({
  targets: 'line',
  translateX: [
    {value: 270, duration: 1000, easing: 'easeOutSine'},
    {value: 0, duration: 1000, easing: 'easeOutSine'}
  ],
  delay: anime.stagger(200, {grid: [16,10], from: 7}),
  loop: true
})

const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z",
wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";

anime({
targets: '.wave-top > path',
easing: 'linear',
duration: 7500,
loop: true,
d: [
{ value: [wave1, wave2] },
{ value: wave3 },
{ value: wave4 },
{ value: wave1 },
],
});





var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px"
  cursor.style.top = y + "px"

})


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


var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
  triggerElement: "#photo"
})
    .setClassToggle('#photo','show') 
    .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".section__threeContainer"
})
    .setClassToggle('.section__threeContainer','threeContainer') 
    .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: ".heading__trans"
})
    .setClassToggle('.heading__trans','heading__trans1') 
    .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".someanimation"
})
    .setClassToggle('.someanimation','someanimation1') 
    .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".five__containers1"
})
    .setClassToggle('.five__containers1','five__containersAnim') 
    .addTo(controller);

new ScrollMagic.Scene({
  duration: 1000, // the scene should last for a scroll distance of 100px
  offset: 0, // start this scene after scrolling for 50px
  triggerElement: ".wave__data"
})
    .setClassToggle('.wave__data','wave__dataAnim') 
    .addTo(controller);

    new ScrollMagic.Scene({
      duration: 1000, 
      offset: 0, 
      triggerElement: ".more__skills1"
    })
        .setClassToggle('.more__skills1','more__skills1Anim') 
        .addTo(controller);

    new ScrollMagic.Scene({
      duration: 1000, 
      offset: 10, 
      triggerElement: ".more__skills2"
    })
        .setClassToggle('.more__skills2','more__skills2Anim') 
        .addTo(controller);

    new ScrollMagic.Scene({
      duration: 1000, 
      offset: 30, 
      triggerElement: ".more__skills3"
    })
        .setClassToggle('.more__skills3','more__skills3Anim') 
        .addTo(controller);

    new ScrollMagic.Scene({
      duration: 1000, 
      offset: 40, 
      triggerElement: ".more__skills4"
    })
        .setClassToggle('.more__skills4','more__skills4Anim') 
        .addTo(controller);

        new ScrollMagic.Scene({
          duration: 1000, 
          triggerElement: ".nine__heading1"
        })
            .setClassToggle('.nine__heading1','nine__heading1Anim') 
            .addTo(controller);
    
        new ScrollMagic.Scene({
          duration: 1000, 
          triggerElement: ".images__parent1"
        })
            .setClassToggle('.images__parent1','images__parent1Anim') 
            .addTo(controller);

    

