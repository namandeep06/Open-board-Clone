let sticky = document.querySelector("#sticky");
sticky.addEventListener("click", function (e) {
  cTool = "sticky"
  let sticky = document.createElement("div");
  sticky.setAttribute("class", "sticky");
  sticky.innerHTML = ` <div class="navbar">
  <div class="close"></div>
  <div class="minimize"></div>
  </div>
  <textarea name=""  class="textarea"></textarea> `;
  body.appendChild(sticky);

  sticky.onmousedown = function (event) {
    dragAndDrop(sticky, event)
  };
  sticky.ondragstart = function () {
    return false;
  };


  let minimize = sticky.querySelector(".minimize");
  let close = sticky.querySelector(".close");
  let textarea = sticky.querySelector("textarea");
  let isClosed = false;
  minimize.addEventListener("click", function (e) {
    if (isClosed == false) {
      textarea.style.display = "none";
    } else {
      textarea.style.display = "block";
    }
    isClosed = !isClosed;
  })
  close.addEventListener("click", function (e) {
    sticky.remove();
  })

})

function dragAndDrop(element, event) {


  let shiftX = event.clientX - element.getBoundingClientRect().left;
  let shiftY = event.clientY - element.getBoundingClientRect().top;

  element.style.position = 'absolute';
  element.style.zIndex = 1000;

  moveAt(event.pageX, event.pageY);

  // moves the sticky at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    element.style.left = pageX - shiftX + 'px';
    element.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the sticky on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the sticky, remove unneeded handlers
  element.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    element.onmouseup = null;
  };
}