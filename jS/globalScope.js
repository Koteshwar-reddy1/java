// var globalScopeVar="hi I am Variable"
// function test(){
//     console.log(globalScopeVar+" inside")
// }
// test()
// console.log(globalScopeVar+" outside")
// functionScope
var globalScopeVar="hi I am Variable";
function test(){
    var functionScopeVar="im function scope";
    console.log(functionScopeVar+" inside")
    console.log(globalScopeVar+" inside")
}
test()
console.log(globalScopeVar+" outside")
console.log(functionScopeVar+" inside")
