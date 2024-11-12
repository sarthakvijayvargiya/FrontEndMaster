// IMP
// Before async await
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Prmise reslved");
  }, 10000);
});

function getData() {
  p.then((data) => console.log(data));
}
getData();

// after async await
// In async await way its wait using await for promise to setlle
async function getData2(params) {
  //await can only used inside async
  const data = await p;
  console.log(data);
  console.log("runs after promise resolve");
}
getData2();

// in old way(promise .then .catch way) JS engine will not wait for promise to resolve
function getData3() {
  p.then((data) => console.log(data));
  console.log("runs before promise resolve JS is good");
}
getData3();