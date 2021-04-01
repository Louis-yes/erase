if(!document.querySelector('erase-style')){
  var styles = `
    .ready-for-poetry .word:hover {
      color: tomato;
      cursor: pointer;
    }
  `
  var styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = styles
  styleSheet.id = "erase-style"
  document.head.appendChild(styleSheet)
}

let init = (e) => {
  if(window.isE) {
      e.preventDefault();
      e.stopPropagation();

      e.target.innerHTML = e.target.innerText.split("").map(w => {return `<span class="word">${w}</span>`}).join("");
      e.target.classList.add('ready-for-poetry');
      e.target.style.transition = "background .3s ease-in-out";
      e.target.style.background = "tomato";

      e.target.addEventListener("click", erase);
      e.target.addEventListener("mousedown", erase);
      e.target.addEventListener("mouseover", erase);

      window.setTimeout(function(){
        e.target.style.background = "";
      }, 300);
  }
}

let erase = (e) => {
  let eventRight = e.type == "mouseover" && window.mouseDown ? true
                  : e.type == "click" ? true
                  : e.type == "mousedown" ? true
                  : false;
  window.eventRight = eventRight && e.target.classList.contains('word')  ;
  if( eventRight && e.target.classList.contains('word')){
    e.target.style.opacity = 0;
  }
}

let eDown = (e) => {if(e.key = 'e'){window.isE = true;}}
let eUp = (e) => {if(e.key = 'e'){window.isE = false;}}

let mouseDown = (e) => {window.mouseDown = true;}
let mouseUp = (e) => {window.mouseDown = false;}

document.addEventListener('click', init);
document.addEventListener('keydown', eDown);
document.addEventListener('keyup', eUp);
document.addEventListener('mousedown', mouseDown);
document.addEventListener('mouseup', mouseUp);
