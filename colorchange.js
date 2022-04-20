let purple = document.querySelector(".purple");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
purple.addEventListener("click",function(e){
    tool.strokeStyle = "#c56cf0";
})
green.addEventListener("click",function(e){
    tool.strokeStyle = "#32ff7e";
})
yellow.addEventListener("click",function(e){
    tool.strokeStyle = "#fffa65";
})