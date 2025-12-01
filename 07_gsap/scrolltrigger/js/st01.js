document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    function log(msg) {
        console.log(msg);
    }

    const tl1 = gsap.timeline({
        defaults: { duration: 0.8, ease: "power2.out", },
        scrollTrigger: {
            trigger: '.demo', //기준점
            start: 'top center', //트리거 박스의 top(맨위)===뷰포트 center(가운데) 만나면 시작
            end: 'bottom center', //트리거 요소의 bottom이 뷰포트 중앙에 닿을때 끝
            scrub: true, //스크롤 움직임, 애니메이션 위치를 동기화
            markers: true, //디버깅용 마커
        },
        onUpdate: () => log('진행률 : ' + tl1.progress().toFixed(2))
    })

    //1단계 : b1박스 오른쪽으로
    tl1.to('.b1', { x: 200, backgroundColor: '#555' })
        .add('label2') //이름표(label)을 찍어둠 - 나중에 점프 가능
        //2단계 b2,b3,b4 순서대로 쭉
        .to('.b2, .b3, .b4', {
            y: 100, opacity: 0.5,
            stagger: { each: 0.3, from: 'center', ease: "back.out(1.7)", }
        })
        .add('label3')
        .to('.b2, .b3, .b4', {
            x: 0, y: 0, opacity: 1, backgroundColor: '#222',
        })

    //Demo2 키보드로 제어하는 타임라인
    const tl2 = gsap.timeline({ paused: true })
        .to('.panel', { x: 200, duration: 1, ease: "power2.inOut", })
        .to('.panel', { rotate: 15, scale: 1.2, duration: 0.6 }, '<0.1')
        .to('.panel', { backgroundColor: '#47f', color: '#fff', duration: 0.5 });

    //전역 키보드 이벤트 
        document.addEventListener('keydown',(e)=>{
            if(e.key === '1') tl1.play('label2');
            if(e.key === '2') tl1.play('label3');
            if(e.key.toLowerCase() == 'p') tl2.play();
            if(e.key.toLowerCase() == 'o') tl2.pause();
            if(e.key.toLowerCase() == 'r') tl2.reverse();
        })
});