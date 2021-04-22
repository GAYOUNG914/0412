/*일반 조건식*/
let score_1 = [85,75,88,90,95,97,77,80,100,88];//국어점수
let score_2 = [85,70,88,80,95,100,75,80,100,88];//수학점수
let score_3 = [80,75,80,95,95,90,77,85,100,88];//영어점수

/*평균구하기 함수 선언*/
function avgFunc(arrayNum) {// 매개변수(인자)에는 배열 추가
  let total = 0;
  var scoreLeng = arrayNum.length;// score_1.length;
  for (var i = 0; i < scoreLeng; i++) {
    total += arrayNum[i];
  }
  return total/scoreLeng;
}

console.log('국어 평균 점수 : '+avgFunc(score_1)+'점, 수학 평균 점수 : '+avgFunc(score_2)+'점, 영어 평균 점수 : '+avgFunc(score_3)+'점');
