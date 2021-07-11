// 스크롤시 뱃지 이미지 숨김
// lodash 메서드 : _.throttle(함수, 시간(s))
// gsap 메서드 : gsap.to(요소, 지속시간(s), 옵션)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    //console.log(window.scrollY);
    if (window.scrollY > 500){
        gsap.to(badgeEl, 0.6, {
                opacity: 0
            ,   display: 'none'
        });
        gsap.to(toTopEl, 0.6, {
            x: 0 
        });
    }
    else {
        gsap.to(badgeEl, 0.6, {
                opacity: 1
            ,   display: 'block'
        });
        gsap.to(toTopEl, 0.6, {
            x: 100 
        });
    }
}, 300));

toTopEl.addEventListener('click', function() {
    gsap.to(window, 0.7 ,{
        scrollTo: 0
    });
});


// visual부분 image시간차노출
// gsap 메서드 : gsap.to(요소, 지속시간(s), 옵션)
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
            delay: (index +1) * 0.7     // 0.7s 1.4s  2.1s  2.7s
        ,   opacity: 1
    });
});


// swiper.js
// Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
        direction: 'vertical'
    ,   autoplay: true
    ,   loop: true
});
new Swiper('.promotion .swiper-container', {
        slidesPerView: 3           // 한번에 보여줄 슬라이드 개수
    ,   spaceBetween: 10       // 슬라이드 사이 여백
    ,   centeredSlides: true    // 1번 슬라이드가 가운데에 보이기 
    ,   loop: true
    ,   autoplay: {
        delay: 5000      //ms 단위
    }
    ,   pagination: {
            el: '.promotion .swiper-pagination' // 페이지 번호 요소 선택자
        ,   clickable: true                             // 사용자의 페이지 번호 요소 제어 가능 여부
    }
    ,   navigation: {
                prevEl: '.promotion .swiper-prev'
            ,   nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
        direction: 'horizontal'     //기본값
    ,   autoplay: true
    ,   loop: true
    ,   spaceBetween: 30
    ,   slidesPerView: 5
    ,   navigation: {
            prevEl: '.awards .swiper-prev'
        ,   nextEl: '.awards .swiper-next'
    }
})


//프로모션 창 on/off
const promotionEl = document.querySelector('.promotion');
const promorionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promorionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion){
        promotionEl.classList.add('hide');
    }
    else {
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
// gsap 메서드 : gsap.to(요소, 지속시간(s), 옵션)
function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
            y: size
        ,   repeat: -1        // 무한반복
        ,   yoyo: true
        ,   ease: Power1.easeInOut
        ,   delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
          .Scene({
                    triggerElement: spyEl                     //보여짐 여부를 감시할 요소를 지정
                ,   triggerHook: 0.8
          })
          .setClassToggle(spyEl, 'show')
          .addTo(new ScrollMagic.Controller());
});




