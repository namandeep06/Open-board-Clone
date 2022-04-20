let cTool = "pencil";   //current tool->by default
   let canvasBoard = document.querySelector("canvas");
    let body = document.querySelector("body");
    let tool = canvasBoard.getContext("2d");
    //only those changes will reflect which are made after setting canvas dimensions 
    canvasBoard.height = window.innerHeight;
   canvasBoard.width = window.innerWidth;
   tool.strokeStyle = "#c56cf0";  //default color














