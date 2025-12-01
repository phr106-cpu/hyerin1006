// 아이디가 #circle인 요소를 찾아서 circle에 저장
const circle = document.querySelector('#circle');
//console.log(circle);

//태그명이 article인 요소를 다 찾아서 저장
const articles = document.querySelectorAll('article');
//console.log(articles);

//article의 전체 개수만큼 반복하면서 mouseenter, mouseleave 이벤트를 연결
for(let el of articles){
    //article에 마우스 포인터를 올리면 #circle의 animation-play-state: paused; 로 변경
    el.addEventListener('mouseenter',e =>{
        circle.style.animationPlayState = 'paused';
    });

        //article에 마우스 포인터를 떠나면 #circle의 animation-play-state: running; 로 변경
    el.addEventListener('mouseleave',e =>{
        circle.style.animationPlayState = 'running';
    });
}