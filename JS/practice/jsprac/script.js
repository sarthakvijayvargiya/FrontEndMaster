// fuction stat == func dec == normal func dec
function x(){
  console.log("x called")
}
x();
// func exp looks like this
var a = function(){
  console.log('a called')
}
a();

// anona -- functio which does have nam
// let a  = function() {

// }

function k(a,b){
  console.log(a)
  return b;
}
const returnFunc = k(function(){},function(){});
console.log(returnFunc)
returnFunc();


let start = Date.now(); // Get the current timestamp
while (Date.now() - start < 5000) {
  // Busy-wait loop
  // Do nothing and keep the main thread occupied
}
console.log("5 seconds have passed, main thread is unblocked now.");
