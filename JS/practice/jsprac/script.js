let a =10;
function b(){
   a = 20;
  c();
  function c(){

    console.log(a);
  }
}

b();
// console.log(a);