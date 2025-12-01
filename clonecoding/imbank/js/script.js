const mainSlide = new Swiper(".main_visual .swiper", {
    effect: "fade",
    // fade 효과 쓰면 교차 페이드 옵션을 권장
    fadeEffect: { crossFade: true },
    loop: true,
    navigation: {
        nextEl: ".main_visual .swiper-button-next",
        prevEl: ".main_visual .swiper-button-prev",
    },
    pagination: {
        el: ".main_visual .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
});

const toggleBtn = document.querySelector('.main_visual .swiper .btns i');
toggleBtn.addEventListener('click', function () {
    //swiper에서 autoplay가 현재 실행 중인지 알려주는 불린 값
    if (mainSlide.autoplay.running) {
        mainSlide.autoplay.stop();
        this.classList.remove('fa-pause');
        this.classList.add('fa-play');
    } else {
        mainSlide.autoplay.stop();
        this.classList.remove('fa-play');
        this.classList.add('fa-pause');
    }
})
/* f_info */
const f_info = document.querySelector('footer .f_bottom .f_left .f_info')
const f_info_btn = document.querySelector('footer .f_bottom .f_left .f_info .btn_more')

f_info_btn.addEventListener('click', function () {
    f_info.classList.toggle('active');
});


// 아코디언(하나만 열림) - 탭메뉴 
const board_box_all = document.querySelectorAll('.board_box section');
const board_box_all_btn = document.querySelectorAll('.board_box h2');

board_box_all_btn.forEach(function (btn, index) {
    btn.addEventListener('click', function (e) {
        //모두 닫고
        board_box_all.forEach(function (section) {
            section.classList.remove('active');
        });
        //현재만 열기
        board_box_all[index].classList.add('active');
    });
})

const select_menu_all = document.querySelectorAll('footer .f_bottom .f_right .select_menu');
const select_menu_btn = document.querySelectorAll('footer .f_bottom .f_right .select_menu button');

select_menu_btn.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        const isActive = select_menu_all[index].classList.contains('active');
        console.log(isActive);
        //모두닫기
        select_menu_all.forEach(function (section) {
            section.classList.remove('active');
        });

        //클릭한게 원래 열려있지 않았다면 다시 열기
        if(!isActive){
            select_menu_all[index].classList.add('active')
        }
    })
})


