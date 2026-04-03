/*
DOM 객체를 생성 후 swiper 실행
*/
// 화살표 함수는 위치가 상관 있음. 함수를 불러오기 전에 선언을 해야 함. 일반 함수는 미리 메모리에 올려두기 때문에 위치 상관 없음.
// function createSwiper () {} <= 일반 함수
const createSwiper = () => {
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',   // 수직으로 나타냄
    autoplay: {delay: 3000},
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});
}

window.addEventListener('DOMContentLoaded', () => {
    createSwiper();
});
