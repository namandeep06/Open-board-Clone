let pencilSize = 5;
let eraserSize = 5;
let lineSize = 5;
let rectSize = 5;

let sizeBoxArr = document.querySelectorAll(".size-box");

sizeBoxArr[0].addEventListener("click", function (e) {

    let elems = ["size1", "size2", "size3", "size4"];

    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if (test) {

        if (firstClass == "size1") {
            pencilSize = 5;
        } else if (firstClass == "size2") {
            pencilSize = 10;
        } else if (firstClass == "size3") {
            pencilSize = 15;
        } else if (firstClass == "size4") {
            pencilSize = 20;
        }
    }
    tool.lineWidth = pencilSize;
})

sizeBoxArr[1].addEventListener("click", function (e) {

    let elems = ["size1", "size2", "size3", "size4"];

    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if (test) {

        if (firstClass == "size1") {
            eraserSize = 5;
        } else if (firstClass == "size2") {
            eraserSize = 10;
        } else if (firstClass == "size3") {
            eraserSize = 15;
        } else if (firstClass == "size4") {
            eraserSize = 20;
        }
    }
    tool.lineWidth = eraserSize;
})

sizeBoxArr[2].addEventListener("click", function (e) {

    let elems = ["size1", "size2", "size3", "size4"];

    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if (test) {

        if (firstClass == "size1") {
            rectSize = 5;
        } else if (firstClass == "size2") {
            rectSize = 10;
        } else if (firstClass == "size3") {
            rectSize = 15;
        } else if (firstClass == "size4") {
            rectSize = 20;
        }
    }
    tool.lineWidth = rectSize;
})

sizeBoxArr[3].addEventListener("click", function (e) {

    let elems = ["size1", "size2", "size3", "size4"];

    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if (test) {

        if (firstClass == "size1") {
            lineSize = 5;
        } else if (firstClass == "size2") {
            lineSize = 10;
        } else if (firstClass == "size3") {
            lineSize = 15;
        } else if (firstClass == "size4") {
            lineSize = 20;
        }
    }
    tool.lineWidth = lineSize;
})