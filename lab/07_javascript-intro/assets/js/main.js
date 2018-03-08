//console
console.log("hello world!");
console.log ('');

//strings

console.log('Strings-');
console.log('i wan\'t a smoothie');
console.log(':P' + ':0');

console.log('');

//numbers
console.log('numbers-');
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 / 8);
console.log(8 * 8);
console.log(8 % 3);


console.log('');

//strings and numbers

console.log('strings and numbers-');
console.log('8 * 8');
console.log('8 * 8' + 8);
console.log('i am '+ (8 * 8) + ' years old');
console.log('8 * 8:' , 8 * 8);

console.log('')

//booleans
console.log('booleans-');
console.log(true, false);
console.log('3 < 4 ',3 < 4);
console.log('3 > 4 ',3 > 4);
console.log ('2 <=2 ', 2<=2);
console.log('2 > 1 && 2 < 12', 2 > 1 && 2 < 12);
//and operator
console.log('5 > 12 || 6<=18', 5 > 12 || 6<=18);
//or operator

console.log('');
// three basic types
console.log('Basic types-')
console.log(typeof 'hello', typeof (8 - 7), typeof (2 > 1));

console.log('');

//variables

console.log('variables-');
var five = 5;
console.log('five:', five);
var ten = 10;
console.log('five + ten', five + ten);
console.log('five * ten', five * ten);

console.log('');

//altering variables
console.log('altering variables-');

var myStudentDebt = 800;
console.log('myStudentDebt', myStudentDebt);
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt', myStudentDebt);
myStudentDebt-= 100;
console.log('myStudentDebt', myStudentDebt);
myStudentDebt+= 100;
console.log('myStudentDebt', myStudentDebt);
myStudentDebt++; //+1
console.log('myStudentDebt', myStudentDebt);
myStudentDebt--; //-1
console.log('myStudentDebt', myStudentDebt);

console.log('');

//arrays
console.log('arrays-');

var myLuckyNumbers = [3, 7, 'eight',(12 + 12), 21];
console.log ('myLuckyNumbers', myLuckyNumbers);
console.log (myLuckyNumbers [1]);

//arrays

console.log('objects-');
var me = { name:'avni',
age:19,
nativeNewYorker:false,
};
console.log('me:', me);
console.log("me['name']:", me['name']);
console.log('me.name:', me.name);

console.log('');
//functions
console.log('functions-');

var sayHi = function () {
  console.log ('hi')
};
sayHi();


var saySomeMessage = function (message) {
  console.log (message)
};
console.log("saySomeMessage('hello'):")
saySomeMessage('hello');
saySomeMessage('goodbye');

var addNumbers = function(num1, num2) {
  return num1 + num2
}
