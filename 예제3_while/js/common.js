// 변수선언
let array = ['사과','배','수박','포도','키위','레몬'];
var count = array.length-1;// 5
console.log(count);
// while ( count >= 0 ) {// for, if 와 같이 해당 조건문이 true 일때 실행
//   //실행문
//   console.log('역순방향'+array[count]);
//   count--;
// }

var countNum = 0;
while ( countNum <= count ) {
  //실행문
  console.log('순방향'+array[countNum]);
  countNum++;
}
