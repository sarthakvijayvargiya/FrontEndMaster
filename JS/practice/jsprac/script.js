function x() {
  let a = 1000;
  function y(){
    console.log(a);
  }
  return y;
}

let k = x();
k();