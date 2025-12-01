document.addEventListener('DOMContentLoaded', () => {
    //HTML 다 그려지고 나서 실행
    gsap.registerPlugin(ScrollTrigger); //스크롤 트리거 플러그인 연결(켜기)
    let start_time = null; //버튼 눌렀을 때 설정됨(기준 시작 시간)

    //로그찍는 헬퍼 함수 - 몇 초 지났는지 알려줌
    function log(msg) {
        //performance.now() 지금 시각(밀리초, ms 단위)을 가져옴
        //start_time 버튼 눌렀을 때 기록해둔 시각
        //(performance.now() - start_time) 지금 - 시작 = 얼마나 시간이 흘렀는지(ms)
        // '/1000' = 밀리포(ms)를 초(s)단위로 바꿔주기
        // .toFixed(3) 소숫점 셋째자리까지 딱 잘라서 보기좋게 (예:0.123초)
        const elapsed = ((performance.now() - start_time) / 1000).toFixed(3);
        //toFixed(3) 소숫점 3번째자리까지라는 뜻
        console.log(`${elapsed}s -> ${msg}`);
    }

    //1. add/call/addPause
    const tl1 = gsap.timeline({ paused: true }); //일단 멈춘 상태로 준비
    tl1.set('.bar', { width: 40, backgroundColor: '#ccc' })
        //바 크기랑 색상 세팅
        .add(() => log('[add]1단계 시작!'))
        //0초에 1단계 시작 찍기
        .to('.bar', { width: 200, duration: 0.6, ease: "power1.out" })
        // 0.6초동안 바 길게 늘리기
        .addPause()
        //0.6초 지점에 멈춤(사용자가 다시 눌러야 진행)
        .add(() => log('[add]0.6초이후 실행'))
        //0.6초 지점 멈춤 자리에서 실행되는 함수
        .to('.bar', { backgroundColor: '#4f7', duration: 0.4 })
        //배경색 바꾸기 0.4초
        .call(() => log('[call]2단계 시작'))
        //끝나고 바로 실행되는 함수
        .addPause();
    //또 멈춤 (다음 버튼 기다림)

    //버튼 클릭하면 타임라인 처음부터 시작
    document.getElementById('btn_next').addEventListener('click', () => {
        if (start_time === null) {
            start_time = performance.now(); //맨 처음 한번만 기록
        }
        tl1.play(); //멈춘 곳부터 이어서 진행
    })

    //'<'동시에 시작
    //'<0.1' 앞의 애니메이션 시작 시점 +0.1초에 시작
    //'<-0.2' 앞의 애니메이션 시작 시점 -0.2초에 시작
    //'>-0.2' 타임라인 0.2초전에 미리 시작
    //'>0.2' 앞의 애니메이션 끝나기 0.2초전에 시작
    const tl2 = gsap.timeline({ paused: true })
        .to('.panel', { x: 200, duration: 1, ease: "power2.out", })
        .to('.panel', { rotate: 15, scale: 1.2, duration: 0.6 }, '<0.1')
        .to('.panel', { backgroundColor: '#4f7', color: '#111', duration: 0.5 })


    document.querySelector('.ctrls').addEventListener('click', (e) => {
        const act = e.target.dataset.act;//눌린 버튼의 data-act 값 가져오기
        if (!act) return;
        if (act === 'play') tl2.play(); //재생
        if (act === 'pause') tl2.pause(); //멈춤
        if (act === 'rev') tl2.reverse(); //반대로 재생
        if (act === 'fast') tl2.timeScale(2).play();//두배 빠르게 
        if (act === 'seek1') tl2.seek(1); //1초 지점으로 점프
        if (act === 'half') tl2.progress(0.5); //절반 지점으로 이동
    })

    //스크롤로 애니메이션 실행 (repeat,yoyo)
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.repeat_area', //이 영역에 들어오면 실행
            start: 'top 70%', //내가 잡은 요소 (트리거)의 맨 위(top)가 브라우저 화면(viewport)의 70%의 지점에 닿을 때 시작
            toggleActions: "play none none reverse"
        },
        repeat: 2, //2번 반복
        yoyo: true, //갔다가 다시 돌아오기
        repeatDelay: 0.3, //반복할 때 잠깐 쉬었다가 다시 실행
        onStart() { console.log('시작!') }, //애니메이션 처음 실행될 때 불리는 함수
        onComplete() { console.log('끝') }, //애니메이션이 끝났을 때 불리는 함수
    });
    tl3.to('.ball', { x: 300, duration: 0.8, ease: "power1.inOut", })
        .to('.ball', { y: 120, duration: 0.5, ease: "back.out(1.7)", })


    //카드 하나씩 튀어나오는 효과 함수 선언
    function popCard(target) {
        const t = gsap.timeline();
        return t.from(target, {
            y: 40, opacity: 0, scale: 0.8, duration: 0.4,
            ease: "back.out(1.7)",
        }).to(target, { rotate: 5, yoyo: true, repeat: 1, duration: 0.2 }, '>');
    }

    const master = gsap.timeline({
        scrollTrigger: {
            trigger: '.row2',
            start: 'top 80%',
            toggleActions: "play none none reverse"
        }
    });

    master.add(popCard('.c1')).add(popCard('.c2'), '<0.15')
        .add(popCard('.c3'), '<0.15');


    //기본 옵션 defaults + 끝났을 때 이벤트 eventCallback()
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.chips2',
            start: 'top 80%',
            toggleActions: "play none none reverse"
        },
        defaults: { duration: 0.45, ease: "power3.out", }
    })


    tl4.from('.chips2 span', { y: 30, opacity: 0, stagger: 0.08 })
        .eventCallback('onComplete', () => console.log('칩애니 완료'));

    const openTl = gsap.timeline({ paused: true })
        .to('.menu', { x: 280, duration: 0.5, opacity: 1, ease: "power2.inOut", })
    openTl.reverse();
    document.getElementById('toggle2').addEventListener('click', () => {
        openTl.reversed(!openTl.reversed());
    });
})
