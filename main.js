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
// var myNumberTween = KUTE.to('#no', {number: 90}).start(); 


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

