//이벤트 리스너 함수타입 사용방법 1 : 선언적 함수
// function getElementNum() {
//   document.getElementById('box').innerHTML = 'test';
// }
//
// // document.getElementById('btn').addEventListener('click',getElementNum);
// /*
// addEventListener(a,b,c) a매개변수: string 타입 이벤트명을 넣어준다.
// b매개변수: function 타입으로 넣어준다.
// c매개변수: boolean 타입 입력 즉  true , false
// */
//
// //이벤트 리스너 함수타입 사용방법 1 :  익명함수
// document.getElementById('btn').addEventListener('click',function(){
//   document.getElementById('box').innerHTML = 'inner text'
// });

function clickBtn(btn,elem,text) {
  let btnSelect = document.getElementById(btn);
  let elemSelect = document.getElementById(elem);
  btnSelect.addEventListener('click',function(){
    elemSelect.innerHTML = text;
  });
}

clickBtn('btn','box','안녕하세요');
clickBtn('a_btn','area','나는 홍길동입니다.');
clickBtn('i_btn','item','비가 많이 오네요');
