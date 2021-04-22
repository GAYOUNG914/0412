// 변수선언
let array = ['사과','배','수박','포도','키위','레몬'];
let obj = { car : '승용차', phone : 'iphone', hose : '아파트'};
let lengNum = array.length
let lastIndex = lengNum - 1;
console.log(lengNum);
console.log(lastIndex);
console.log(obj.car);
console.log(obj['car']);

function inputArray(objNum,arrayNum) {
  console.log(objNum[arrayNum])
}

// for( items of obj ){// object는  iterable 값을 가져올 수 없다.
//   console.log(items);
// }

// for (var i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

// for of 사용 : 반복 가능한 객체, 배열도 객체이며, array,set,map 등으로 사용할 수 있다.
// for( items of array ){// 첫번째 인자 : 배열의 값을 담을 변수명, 두번째 인자 : 배열의 명
//   console.log(items)
// }

// for in 사용법
// console.log(array[0])

for( items in array ){
  // console.log(items)
  // console.log(array[items])
  if( items == 0 ){
    console.log(array[lastIndex]);
  }
}
