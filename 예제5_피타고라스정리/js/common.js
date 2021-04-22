// 변수선언
//제곱연산 함수 선언
function square(x) {
  return x*x;
}

// function pytha(width, height) {
//   return '너비 제곱:'+ square(width) +' 높이 제곱:'+ square(height);
// }

function pytha(width, height) {
  return Math.sqrt(square(width) + square(height));
}

console.log(pytha(3,4));

/*reacArea*/
function reacArea(w,h){
  return w*h;//사각형 너비
}
console.log('사각형 너비 : '+reacArea(3,4));

/*triArea*/
function triArea(w,h){
  return w*h/2;//삼각형 너비
}
console.log('삼각형 너비 : '+triArea(3,4));
