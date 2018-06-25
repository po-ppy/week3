// alert("from 1.js");
var age = 20;
console.log(typeof(age));
age.toString();
console.log(typeof(age));
age = age.toString();
console.log(typeof(age));
age = parseInt(age);
console.log(typeof(age));
var f = 2.34;
f = parseInt(f);
console.log(f);
/*var num = parseInt(prompt("请输入一个数字"));
console.log(num);
var num1 = parseInt(prompt("请输入一个数字"));
console.log(num1);
var add = num + num1;
console.log(add);*/
var str1='123abc';
var str2 = 'abc123';
console.log("parseInt(str1)");
console.log(parseInt(str1));
console.log("parseInt(str2)");
console.log(parseInt(str2));
console.log(isNaN(12));

console.log('----------------------------');

var c = "12.13";
console.log(parseInt(c));
var d = 34;
console.log(parseFloat(d));
// console.log(parseFloat(true));
console.log("number()");
console.log(Number(str1));
console.log("true + true");
console.log(true+true);
console.log('----------------------------');
var temp1 = 1;
// var temp2 = temp1++;
var temp2 = ++temp1;
// temp1 = ++temp1;
console.log(temp1);
console.log(temp2);

var score = prompt("输入分数");
// var result = score>=90?"优秀":"不优秀";
// var result = score>=90?"优秀":(score>=80?"良好":(score>=60?"及格":"不及格"));
var result;
if(score>=90){
    result = "优秀";
}else if (score >= 80){
    result = "良好";
} else if (score >= 60){
    result = "及格";
} else {
    result = "不及格";
}
console.log(result);
