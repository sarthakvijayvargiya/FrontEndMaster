let a1 = 1;
a();
b();
c();
d();
console.log(a1)
function a() {
  var a1 = 10;
  console.log(a1);
}

function b() {
  var a1 = 100;
  console.log(a1);
}

function c() {
  a1 = 1000;
  console.log(a1);
}
function d() {
  console.log(a1);
}
