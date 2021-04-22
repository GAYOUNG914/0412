
let name = ['홍길동','박길동','김길동','이길동','최길동'];
let age = [30, 18, 21, 35, 38];
let height = [175,180,190,185,178];
let score = [85,88,90,95,95];

/*평균구하기 함수 선언*/
function avgFunc(arrayNum) {
  let total = 0;
  var scoreLeng = arrayNum.length;
  for (var i = 0; i < scoreLeng; i++) {
    total += arrayNum[i];
  }
  return total/scoreLeng;
}

console.log('나이 평균 : '+avgFunc(age)+', 키 평균 : '+avgFunc(height)+', 점수 평균 : '+avgFunc(score));

/*document에 text 출력*/
var list = '<table><tr>';

/*document에 출력*/
list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';

/*for 구문 시작*/
for (var i = 0; i < name.length; i++) {
  list += '<tr><td>'+name[i]+'</td><td>'+age[i]+'</td><td>'+height[i]+'</td><td>'+score[i]+'</td></tr>';
}

/*for 구문 끝*/
list += '<tr><td>평균</td><td>'+avgFunc(age)+'</td><td>'+avgFunc(height)+'</td><td>'+avgFunc(score)+'</td></tr>';
list += '</tr></table>';
document.body.innerHTML = list;
console.log(list);
