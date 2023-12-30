let principal = document.getElementById("principal");
let span1 = document.getElementById("span1")
let span2 = document.getElementById("span2")
let span3 = document.getElementById("span3")
let interest = document.getElementById("interest")
let time = document.getElementById("time")
let range1 = document.getElementById("range1")
let range2 = document.getElementById("range2")
let range3 = document.getElementById("range3")

function mainfunction(){
    let x =  principal.value  ;
    let y = principal.value * interest.value * time.value / 100 ;
    let z = eval(+y + +x);
    span1.innerHTML = x;
    span2.innerHTML = y;
    span3.innerHTML = z;
    if(principal.value){
        range1.value = principal.value
    }
    if(interest.value){
        range2.value = interest.value
    }
    if(time.value){
        range3.value = time.value
    }
    paifunction()
}
function range1function(){
    principal.value = range1.value
    paifunction()
}
function range2function(){
    interest.value = range2.value
    paifunction()
}
function range3function(){
    time.value = range3.value
    paifunction()
}

// pai chart 
function paifunction(){
    const xValues = ["Invested Amount", "Est. Return"];
const yValues = [principal.value, span2.innerHTML];
const barColors = [
  "green",
  "blue",
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
});
}
window.addEventListener("load",paifunction)