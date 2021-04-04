// TODO
//
// Make readme / installation page


if(!document.body.classList.contains("eraser-initiated")) {
  if(!document.querySelector('#erase-style')){
    var styles = `
      .ready-for-poetry .erase-able:hover {
        color: tomato;
        cursor: pointer;
      }
      .preparing-poetry {
        cursor: pointer !important;
      }
      .highlighted {
        box-shadow: 0px 0px 1px 1px black !important;
        box-sizing: border-box !important;
      }
    `;
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    styleSheet.id = "erase-style";
    document.head.appendChild(styleSheet);
  }

  var init = (e) => {
    if(document.body.classList.contains("preparing-poetry")){
      e.preventDefault();
      e.stopPropagation();

      e.target.innerHTML = e.target.innerText.split("").map(w => {return `<span class="erase-able">${w}</span>`}).join("");
      e.target.classList.add('ready-for-poetry');
      e.target.classList.remove('highlighted');
      e.target.style.transition = "background .3s ease-in-out";
      e.target.style.background = "silver";
      e.target.style.userSelect = "none";

      e.target.addEventListener("click", erase);
      e.target.addEventListener("mousedown", erase);
      e.target.addEventListener("mouseover", erase);

      document.body.classList.remove("preparing-poetry");
      document.removeEventListener('click', init);

      window.setTimeout(function(){
        e.target.style.background = "";
      }, 300);
    }
  };
  var erase = (e) => {
    var eventRight = e.type == "mouseover" && window.mouseDown ? true
                    : e.type == "click" ? true
                    : e.type == "mousedown" ? true
                    : false;
    if(eventRight && e.target.classList.contains('erase-able')){
      e.target.style.opacity = 0;
    }
  };
  var mouseDown = (e) => {window.mouseDown = true;};
  var mouseUp = (e) => {window.mouseDown = false; };

  function addHighlight(target) {if(document.body.classList.contains("preparing-poetry")){target.classList.add('highlighted')};}
  function removeHighlight(target) {if(document.body.classList.contains("preparing-poetry")){target.classList.remove('highlighted')};}
  document.addEventListener('mouseover',function(e) {addHighlight(e.target);});
  document.addEventListener('mouseout',function(e) {removeHighlight(e.target);});

  document.addEventListener('click', init);
  document.addEventListener('mousedown', mouseDown);
  document.addEventListener('mouseup', mouseUp);
  document.body.classList.add("preparing-poetry");
}
