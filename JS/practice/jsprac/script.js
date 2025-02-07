const gp = document.querySelector("#grandParentClicked");
console.log(gp);

document.querySelector("#grandParentClicked").addEventListener("click", (e) => {

  console.log("greandparentclicked");
},true);

document.querySelector("#parentClicked").addEventListener("click", (e) => {
  console.log("parentClicked");
  e.stopPropagation();

},false);

document.querySelector("#childClicked").addEventListener("click", (e) => {

  console.log("childClicked");
},true);
