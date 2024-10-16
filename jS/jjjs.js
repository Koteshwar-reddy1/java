// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(1,2,3))
// function sum1(...arr){
//     let sum=0;
//     for(let arg of arr){
//         sum+arg
//     }
//     return sum
// }
// console.log(sum1(1,2,3,4,5))
//  let arr = [1,2,3];
//  let arrCopy = [...arr];
//  console.log(arr)
                       
// function sayHi(){
//    alert ("hello..")
// }
// setTimeout(sayHi,5000);
 
function outerfunction(){
    let counter = 0
    function innerfunction(){
        counter+=1
        return counter
    }
    return innerfunction
}
let increment = outerfunction()
console.log(increment())
console.log(increment())
console.log(increment())