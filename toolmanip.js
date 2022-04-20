 let toolsCont = document.querySelector(".toolbar");
 let optionsCont = document.querySelector(".options-cont");
 let optionsFlag = true;

 optionsCont.addEventListener("click", (e) => {
   // true -> tools show, false -> hide tools
   optionsFlag = !optionsFlag;

   if (optionsFlag) openTools();
   else closeTools();
 })


 function openTools() {
   let iconElem = optionsCont.children[0];
   iconElem.classList.remove("fa-times");
   iconElem.classList.add("fa-bars");
   toolsCont.style.display = "flex";
 }

 function closeTools() {
   let iconElem = optionsCont.children[0];
   iconElem.classList.remove("fa-bars");
   iconElem.classList.add("fa-times");
   toolsCont.style.display = "none";
 }


 let pencil = document.querySelector("#pencil");
 let eraser = document.querySelector("#eraser");
 let rect = document.querySelector("#rectangle");
 let line = document.querySelector("#line");

 let options = document.querySelectorAll(".size-box");
 
 pencil.addEventListener("click", function (e) {
   if (cTool == "pencil") {
     options[0].style.display = "flex";
   } else {
     for (let i = 0; i < options.length; i++) {
       options[i].style.display = "none";
     }
     cTool = "pencil";
     tool.strokeStyle = "#c56cf0";
     tool.lineWidth = pencilSize;

   }
 })
 eraser.addEventListener("click", function (e) {
   if (cTool == "eraser") {
     options[1].style.display = "flex";
   } else {
     cTool = "eraser";
     tool.strokeStyle = "white";
     for (let i = 0; i < options.length; i++) {
       options[i].style.display = "none";
     }
     tool.lineWidth = eraserSize;

   }
 })
 rectangle.addEventListener("click", function (e) {
   if (cTool == "rectangle") {
     options[2].style.display = "flex";
   } else {

     for (let i = 0; i < options.length; i++) {
       options[i].style.display = "none";
     }
     cTool = "rectangle";
     tool.strokeStyle = "#c56cf0"
     tool.lineWidth = rectSize;
   }
 })
 line.addEventListener("click", function (e) {
   if (cTool == "line") {
     options[3].style.display = "flex";
   } else {
     for (let i = 0; i < options.length; i++) {
       options[i].style.display = "none";
     }
     cTool = "line";
     tool.strokeStyle = "#c56cf0";
     tool.lineWidth = lineSize;
   }
 })
 //current tool
 //identify->one click , double click
 //note that => pencil 0 eraser 1 rectangle 2 line 3
 //means one time already clicked now second click being made
 //show the options