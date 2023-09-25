// [10장] 객체 리터럴
// 아래의 코드를 실행해보시고 왜 결과 값이 그렇게 나오는지 생각해보세요.

/*var person = {
    firstName : 'turtle',
    last-name : 'park'
};
console.log(person);*/

// SyntaxError: Unexpected token '-'
// JavaScript에서는 객체의 프로퍼티 키로 유효한 변수 이름 규칙을 따라야 하며, 하이픈은 변수 이름에 사용할 수 없기 때문, 따라서 SyntaxError가 발생하게 됨
    
//==============================================
    
var word1 = {
    var: '',
    function: ''
};
console.log(word1);

// 실행 결과 : { var: '', function: '' }
// 객체의 프로퍼티 키로 var와 function이라는 예약어를 사용하고 있지만, JavaScript에서는 이런 예약어를 키로 사용 가능하기 때문에 정상적으로 객체가 생성되고 출력됨
//==============================================
    
//프로퍼티 키 동적 생성
var objES5 = {}
var keyES5 = 'ES5'
objES5[keyES5] = 'world';
console.log(objES5);

// 실행 결과 : { ES5: 'world' }
// 객체 리터럴 대신 빈 객체를 먼저 생성한 후, objES5 객체에 keyES5 변수의 값을 프로퍼티 키로 설정함, 결과적으로 ES5라는 프로퍼티 키와 'world'라는 값이 있는 객체가 생성됨
    
//==============================================
    
//계산된 프로퍼티 이름
var keyES6 = 'HELL';
var objES6 = {[keyES6]: 'o'};
console.log(objES6);

// 실행 결과 : { HELL: 'o' }
// keyES6 변수의 값을 키로 사용하고 있으며, 결과적으로 { HELL: 'o' } 객체가 생성됨

//==============================================
    
var emptyObj = {
    '' : ''
};
console.log(emptyObj);

// 실행 결과 : { '': '' }
// 빈 문자열 ''을 프로퍼티 키로 가지는 객체를 생성됨, 결과적으로 { '': '' } 객체가 생성됨
    
//==============================================
    
var numObj = {
    1 : 0,
    2 : 1,
    3 : 2
};
console.log(numObj);

// 실행 결과 : { '1': 0, '2': 1, '3': 2 }
// 숫자를 문자열로 변환한 값을 프로퍼티 키로 가지는 객체를 생성됨, 결과적으로 { '1': 0, '2': 1, '3': 2 } 객체가 생성됨

//==============================================
    
var duplicateObj = {
    name : 'park',
    name : 'kim'
};
console.log(duplicateObj);

// 실행 결과 : { name: 'kim' }
// name이라는 프로퍼티 키를 중복해서 사용함, JavaScript 객체는 중복된 키를 가지면 나중에 선언한 값으로 덮어씌우게 됨, 따라서 { name: 'kim' } 객체가 생성됨