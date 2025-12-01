// 1. alert 예제
document.getElementById('btn_alert')/* getElementById에 이미 id 라는 글자가 있어서 '#'안써도됨 */ .onclick = () =>{
    alert('이것은 alert()으로 띄운 알림 메세지입니다');
}

// 2. prompt 예제
// prompt('입력내용','입력내용 초기 값');
document.getElementById('btn_prompt1').onclick = function(){
    const nameP = prompt('이름을 입력하세요','홍길동')
    document.getElementById('ioResult').innerHTML = nameP;
}

// prompt('입력내용') - 초기값은 생략가능
document.getElementById('btn_prompt2').onclick = () =>/* 화살표함수 */ {
    const nameP = prompt('문자를 입력하세요');
    document.getElementById('ioResult').innerHTML = '<strong>'+nameP + ' 기본값 없음 </strong>'
}

// 3. confirm 예제
document.getElementById('btn_confirm').onclick = () => {
    const isSure = confirm('자바스크립트를 배우고 싶습니까?'); /* 확인하고 취소를 누르는 명령어 */
    console.log(isSure);
    if (isSure){
        document.getElementById("ioResult").innerHTML = '배우고 싶다고 선택했습니다.'
    }else{
        document.getElementById("ioResult").innerHTML = '아직 고민중이네요!'
    }
}

// 4. 식(Expression) 예제 실행
const output = '<strong>식(Expression) 예제</strong><br>';
const sum = 3+2; //식 : 5라는 값을 생성
const greeting = '안녕하세요'; //식: 문자열 값
const isAdult = 20 >= 18; //식 : true 값을 생성

document.getElementById('btn_expression').onclick = () => {
    const Resulthtml = output + sum + ' / ' + greeting + ' / ' + isAdult;
    document.getElementById('result_output2').innerHTML = Resulthtml;
    document.querySelector('.pre_wrap1').classList.add('on');
    document.querySelector('.pre_wrap2').classList.remove('on');
}


// 5. 문(Statement) 예제 실행
document.getElementById('btn_statement').onclick = () => {
    const output1 = '<strong>문(Statement) 예제 결과</strong><br>'
    let output2;
    //문 : 조건문(if)
    if(sum>5){
        output2 = 'sum값이 5보다 큽니다';
    }else{
        output2 = 'sum값이 5이하입니다.';
    }

    document.getElementById('result_output2').innerHTML = output1 + output2;
    document.querySelector('.pre_wrap2').classList.add('on');
    document.querySelector('.pre_wrap1').classList.remove('on')
}