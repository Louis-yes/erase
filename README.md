<h1 class="erase-me">Erase</h1>

<p class="erase-me">Erase is a bookmarklet for creating erasure poetry out of online texts.</p>

<p id="erase-me-baby">It was made with f*cebook mess*nger in mind, it works okay with any chunk of text.
Anything that's not plain text might break - If something breaks, or you erase too far, just refresh the page to return everything to it's initial state.</p>

<p>
  <span class="erase-me">drag this to your bookmarks bar to install →</span>
  <a class="bookmarklet" href="javascript:(function()%7Bif(!document.body.classList.contains(%22eraser-initiated%22))%20%7Bif(!document.querySelector('%23erase-style'))%7Bvar%20styles%20%3D%20%60.ready-for-poetry%20.erase-able%3Ahover%20%7Bcolor%3A%20tomato%3Bopacity%3A%200%3Bcursor%3A%20pointer%3B%7D.preparing-poetry%20%7Bcursor%3A%20pointer%20!important%3B%7D.highlighted%20%7Bbox-shadow%3A%200px%200px%201px%201px%20black%20!important%3B%7D%60%3Bvar%20styleSheet%20%3D%20document.createElement(%22style%22)%3BstyleSheet.type%20%3D%20%22text%2Fcss%22%3BstyleSheet.innerText%20%3D%20styles%3BstyleSheet.id%20%3D%20%22erase-style%22%3Bdocument.head.appendChild(styleSheet)%3B%7Dvar%20init%20%3D%20(el)%20%3D%3E%20%7Bel.innerHTML%20%3D%20el.innerText.split(%22%22).map(w%20%3D%3E%20%7Breturn%20%60%3Cspan%20class%3D%22erase-able%22%3E%24%7Bw%7D%3C%2Fspan%3E%60%7D).join(%22%22)%3Bel.classList.add('ready-for-poetry')%3Bel.classList.remove('highlighted')%3Bel.style.transition%20%3D%20%22background%20.3s%20ease-in-out%22%3Bel.style.background%20%3D%20%22silver%22%3Bel.style.userSelect%20%3D%20%22none%22%3Bel.addEventListener(%22click%22%2C%20erase)%3Bel.addEventListener(%22mousedown%22%2C%20erase)%3Bel.addEventListener(%22mouseover%22%2C%20erase)%3Bdocument.body.classList.remove(%22preparing-poetry%22)%3Bdocument.removeEventListener('click'%2C%20init)%3Bwindow.setTimeout(function()%7Bel.style.background%20%3D%20%22%22%3B%7D%2C%20300)%3B%7D%3Bvar%20erase%20%3D%20(e)%20%3D%3E%20%7Bvar%20eventRight%20%3D%20e.type%20%3D%3D%20%22mouseover%22%20%26%26%20window.mouseDown%20%3F%20true%3A%20e.type%20%3D%3D%20%22click%22%20%3F%20true%3A%20e.type%20%3D%3D%20%22mousedown%22%20%3F%20true%3A%20false%3Bif(eventRight%20%26%26%20e.target.classList.contains('erase-able'))%7Be.target.style.opacity%20%3D%200%3B%7D%7D%3Bvar%20mouseDown%20%3D%20(e)%20%3D%3E%20%7Bwindow.mouseDown%20%3D%20true%3B%7D%3Bvar%20mouseUp%20%3D%20(e)%20%3D%3E%20%7Bwindow.mouseDown%20%3D%20false%3B%20%7D%3Bfunction%20addHighlight(target)%20%7Bif(document.body.classList.contains(%22preparing-poetry%22))%7Btarget.classList.add('highlighted')%7D%3B%7Dfunction%20removeHighlight(target)%20%7Bif(document.body.classList.contains(%22preparing-poetry%22))%7Btarget.classList.remove('highlighted')%7D%3B%7Ddocument.addEventListener('mouseover'%2Cfunction(e)%20%7BaddHighlight(e.target)%3B%7D)%3Bdocument.addEventListener('mouseout'%2Cfunction(e)%20%7BremoveHighlight(e.target)%3B%7D)%3Bdocument.addEventListener('click'%2C%20function(e)%7Bif(document.body.classList.contains(%22preparing-poetry%22))%7Be.preventDefault()%3Be.stopPropagation()%3Binit(e.target)%3B%7D%7D)%3Bdocument.addEventListener('mousedown'%2C%20mouseDown)%3Bdocument.addEventListener('mouseup'%2C%20mouseUp)%3Bdocument.body.classList.add(%22preparing-poetry%22)%3B%7D%7D)()">
    erase
  </a>
</p>
<h2 class="erase-me">Why?</h2>
<quote>
  <span class="erase-me">life is much, much more than is necessary, and much, much more than any of us can bear, so we erase it or it erases us,
  we ourselves are an erasure of everything we have forgotten or don't know or haven't experienced, and on our deathbed,
  even that limited and erased "whole" becomes further diminished, if you are lucky you will remember the one word water, all others
  have been erased; if you are lucky you will remember one place or one person, but no one will ever, ever read on their deathbed,
  the whole text, intact and in order.</span> - from <em>On Erasure</em> by <a href="http://www.maryruefle.com/">Mary Rueler</a>
</quote>
<h2 class="erase-me">Here it is in the wild</h2>
<p>
  <img src="message_before.png" alt="">
  <img src="message_after.png" alt="">
</p>

<h2 class="erase-me">Thanks to</h2>
<ul class="list pl0">
  <li><a class="link" href="https://www.heralindsaybird.com">Hera Lindsay Bird</a>, <span class="erase-me">for the erasure workshop she hosted in 2015, where I came across the essay from the extract above.</span></li>
  <li><a class="link" href="https://hellothisismywebsite.com/">Harry Lee Shang Lun</a>,  <span class="erase-me">for getting me on board with a similar project which inspired this bookmarklet.</span></li>
  <li><a class="link" href="https://gilesgraham.xyz">Giles Graham</a>, <span class="erase-me">for encouragement and helping me test - having his messages subjected to numerous ablations.</span></li>
  <li><a class="link" href="https://mkremins.github.io/">Max Kreminski</a> <span class="erase-me">for making</span> <a href="https://mkremins.github.io/blackout/">blackout</a><span class="erase-me"> - another inspiration.</span></li>
</ul>
<footer>
  <p>developed by <a href="https://yesthisislouis.com">Louis</a> for fun
</footer>
