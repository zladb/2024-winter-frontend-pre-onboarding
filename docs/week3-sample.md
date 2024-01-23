## 2. 자료형
```js
const name = "Mike";
const age = 30;

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = "I\'m a boy."; //작은 따옴표를 문자로 인식하게 하기 위해 \를 사용
const message3 = `My name is ${name}`; //백틱을 사용하면 문자열 안에 변수를 넣을 수 있음

console.log(message);
console.log(message2);
console.log(message3);

const x = 1 / 0; //Infinity
const y = name / 2; //NaN (not a number)
```

### null vs undefined

```js
let z; //undefined (값이 할당되지 않음) (미정)
const z2 = null; //null (값이 없음) (확정) -> 객체가 아님
```

## 3. alert, prompt, confirm

```js
const nameP = prompt("이름을 입력해주세요", "이름입력"); //prompt는 입력창을 띄워줌 
//입력없이 취소하면 null값이 입력됨
//두번째 인수는 placeholder
alert("환영합니다 " + nameP + " 님"); //alert는 경고창을 띄워줌

const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult);
```

## 4. 형변환

```js
const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore)/2;

console.log(result);
```

- prompt로 입력받으면 90 30 넣었을 때 4515나옴 -> prompt는 무조건 string으로 받음
- 항상 의도를 가지고 원하는 자료형으로 바꾸기

### boolean -> [false case: 숫자 0, 빈문자열, null, undefined, NaN]

```js
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
```

## 5. 연산자

```js
//거듭제곱
console.log(2 ** 3); //2의 3승
```

## 6. 비교연산자, 조건문

```js
//동등연산자

const a = 1;
const b = "1";

console.log(a == b); //true
console.log(a === b); //false (값과 자료형이 같아야 true)
```

## 7. 함수

```js
//전역변수 vs 지역변수
let msg = "welcome";

function sayHello(name) {
    let msg = "hello";
    console.log(msg + " " + name);
}

sayHello("Mike"); //hello Mike
console.log(msg); //welcome
```

## 8. 함수 선언문 vs 함수 표현문

```js
function sayHello() {
    console.log('Hello');
} //함수 선언문 -> 어디서든 실행가능 
```

- 호이스팅 (hoisting): 함수 선언문은 코드의 맨 위로 끌어올려지는 현상 (자바스크립트 내부 알고리즘)

```js  
let sayHello2 = function() {
    console.log('Hello');
} //함수 표현문 -> 선언하기 전에 실행하면 에러남
```

## 9. 화살표 함수(arrow function)

```js 
let add = (num1, num2) => {return num1 + num2}; //(매개변수) => {함수내용}
let add = (num1, num2) => (num1 + num2); //return 생략 가능
let add = (num1, num2) => num1 + num2; //함수 내용이 한줄이면 {}와 return 생략 가능
```

## 10. 객체(Object)

### 객체접근

```js
const superman = {
    name : 'clark',
    age :33,
}

//접근
superman.name //'clark'
superman['age'] //33

//추가
superman.gender = 'male'; 
superman['hairColor']  = 'black';

//삭제
delete superman.hairColor;
```

### 단축 프로퍼티

```js
const name = 'clerk';
const age = 33;

const superman = {
    name, //name : name
    age, //age : age
    gender : 'male',
}
```

### 프로퍼티 존재 여부 확인

- 존재하지 않는 프로퍼티는 접근했을 때 undefined를 반환

```js
'birthDay' in superman; //false
'age' in superman; //true
```

- 어떤 값이 null일지 확신하지 못할 때 사용

## 11. Object - method, this

- method: 객체 프로퍼티로 할당된 함수
- this: 객체의 멤버변수에 접근할 때 붙이는 키워드

```js
//this 사용 예시

const sayHello = function(){
    console.log(`Hello,I'm ${this.name}`);
}
let boy = {
    name : 'Mike',
    sayHello,
}

let girl = {
    name : 'Jane',
    sayHello,
}

boy.sayHello();
girl.sayHello();
```

위 예시에서 sayHello라는 함수를 선언할 당시에는 어떤 객체에서 method로 사용할 지 불분명하기 때문에 this keyword를 사용해야 한다.

### 화살표 함수는 자신만의 this를 가지지 않고, 외부에서 값을 가져옴.

- 화살표 함수에서 this는 전역객체 
- 브라우저 환경에서는 window, 
node.js 환경에서는 global을 가리킴

```js
let boy = {
    name = `Mike`;
    sayHello : () =>{
        console.log(this); //window
    }
    sayHello : function(){
        console.log(this); //boy
        
    }
}

boy.sayHello() // this != boy
```
