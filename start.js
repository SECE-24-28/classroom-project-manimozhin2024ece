// // let,var,const

// var nam="mani"
// console.log(nam)
// var nam="manimozhi"
// console.log(nam)
// //let
// let roll_no=123
// console.log(roll_no)
// // const
// const branch="IT"
// console.log(branch)

// //function 
// name()
// function name(){
//     console.log("hello")

// }
// // func expr

// let fun= function(){
//     console.log("first")

// }
// fun()
// //
// let func=()=>{
//     console.log("second")
// }
// func()
// // 
// let hel="hello"
// let func1=()=>{
//     var branch="ECE"
//    // let hi="hiii"
//     console.log(hi)
//     if(true){
//         Console.log(branch,'from the if block')
//     }
//     func1()
// }
// //
// let funct=()=>{
//     var branch="ECE"
//     const hello="hello"
//     if(true) {

//     var branch="ECE"
      
//     }
//     console.log(branch)
// }
// funct()
// //
// let arr=(a,b,c,d)=>{
//     console.log(a,b,c,d)
// }
// let ar=[1,2,3,4]
// arr(...ar)
// //
// let abc=(...a)=>{
//     console.log(a)
// }
// abc(1,3,5)
// // inside a 1 more fumc 
// const nam1=()=>{
//     let data="data"
//     const hello=()=>{
//         console.log(data)
//     }
// return hello
// } 
// let h=nam1()
// h()
// // set timer
// var name ="Mani"
// setTimeout(()=>{
//     console.log("From timer")
// },1000)
// console.log(name)
// // set interval
// let name1="Manimozhi"
// let stop=setInterval(()=>{
//     console.log("from interval")
// },1000)
// clearInterval(stop)
// console.log(name1)
// //
// let nam2="manima"
// let stop1=setInterval(()=>{

// },1000)
// setTimeout(()=>{
//     clearInterval(stop1)
// },5000)
// console.log(nam2)

// //
// const funct1=()=>{
//     let time =1000
//     setTimeout(()=>{
//         console.log(time)
//     },1000);
// }
// funct1()

//
// for(var i=0;i<=9;i++){
//     continue
// }
// // console.log(i)
// for(var i=0;i<10;i++){
//     function name(a){
//         setTimeout(()=>{
//             console.log(a)
//         },1000)
//     }
//     name(i)
// }
//
// let a=10
// let b='29'
// // console.log(typeof(Number(b)))
// a=a.toString()
// console.log(typeof(a))
// // template literals
// let hii="hello"
// console.log(`hii ${hii}
//      ${2+5}`)

// // task print pass or fail using switch case 

// let mark=80
// let result;
// switch(true){
//     case(mark>=35):
//     result="pass"
//     break;
//     case(mark<35):
//     result="fail"
//     break;
//     default:
//     result="invalid marks"    
// }
// console.log("result is:", result)
//
// let ar=[1,2,3,4,5]
// for(let i in ar){
//     console.log(i)
// }
// //
//1. check grade
// let grade = "B";
// switch (grade) {
//   case "A": console.log("Excellent"); break;
//   case "B": console.log("Good"); break;
//   case "C": console.log("Average"); break;
//   default: console.log("Try again");
// }
//2.convert uppercase
// let name = "hello";
// console.log(name.toUpperCase());

// 3.split strin to array 
let sentence = "I love JS";
let words = sentence.split(" ");
console.log(words);
// 4.lowercase
let text = "WORLD";
console.log(text.toLowerCase());
// 5.join array to string 
let arr = ["Welcome", "Home"];
console.log(arr.join(" "));
//6.replace all char
let str = "abc abc";
console.log(str.replaceAll("abc", "123"));
// 7.split a string 
let fruit = "apple,banana,mango";
console.log(fruit.split(","));

// 8.reverse a string 
let s = "hello";
let r = s.split("").reverse().join("");
console.log(r);

// count char in string 
let a = "javascript";
console.log(a.length);

// 10.check vowel or not 
let t = "apple";
let f = t[0].toLowerCase();
if ("aeiou".includes(f)) {
  console.log("Starts with vowel");
} else {
  console.log("Not starts with vowel");
}

//11. reverse a words
let w = "I love JS";
let o = w.split(" ").reverse().join(" ");
console.log(o);

