document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        disable: false, // aos 끄지 않음 -> 애니메이션 작동하게 두기
        startEvent: 'DOMContentLoaded', // html이 다 불러와지면 바로 aos 시작
        initClassName: 'aos-init', // AOS가 준비됐다는 표시 클래스 (자동 붙음)
        animatedClassName: 'aos-animate', // 애니메이션이 실행될 때 붙는 클래스 이름 
        useClassNames: false, // html에 data-aos 값 그대로 클래스 안 붙이기 적용
        disableMutationObserver: false, // 새로 생긴 요소도 자동으로 감지해서 애니메이션 적용
        debounceDelay: 50, // 창크기 바꿀 때 0.05초 기다렸다가 계산 (너무 자주 안하게)
        throttleDelay: 99, // 스크롤할 때 0.099초마다 한번씩 체크 (성능 좋게)
    });

    const ham = document.querySelector('.ham');
    const header = document.querySelector('header');
    ham.addEventListener('click', () => {
        header.classList.toggle('on');
    })

    //메뉴 li들에 순차적 delay 주기
    const gnbItems = document.querySelectorAll('header .fix .gnb>ul>li');
    gnbItems.forEach((li, index) => {
        li.style.transitionDelay = `${0.2 * (index + 1)}s`
    });

    //스크롤시 nav .lang 없애기
    window.addEventListener('scroll', () => {
        const st = window.scrollY; //스크롤 위치값 가져오기
        //console.log(st);
        if (st >= 80) {
            header.classList.add('sc');
        } else {
            header.classList.remove('sc');
        }
    });
})