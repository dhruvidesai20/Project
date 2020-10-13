var p1= document.getElementById("page1");
var p2= document.getElementById("page2");

var startingX;

function p1Start(evt){
  startingX= evt.touches[0].clientX;
}

function p1Move(evt){
  var touch= evt.touches[0];
  var change= startingX - touch.clientX;
  if (change<0) {
    return;
  }
  p1.style.left= '-' + change + 'px';
  p2.style.display= 'block';
  p2.style.left= (screen.width - change) + 'px';
  evt.preventDefault();
}

function p1End(evt){
  var change= startingX - evt.changedTouches[0].clientX;
  var diff= screen.width / 3;
  if (change<diff) {
    p1.style.left= 0;
    p2.style.left= '100%';
    p2.style.display= 'none';
  }
  else{
    p1.style.transition= 'all .3s';
    p2.style.transition= 'all .3s';
    p1.style.left= '-100%';
    p2.style.left= 0;
    p2.style.display= 'block';
  }
}

function p2Start(evt){
  startingX= evt.touches[0].clientX;
}

function p2Move(evt){
  var touch= evt.touches[0];
  var change=  touch.clientX - startingX;
  if (change<0) {
    return;
  }
  p1.style.display= 'block';
  p2.style.left= (change - screen.width) + 'px';
  p1.style.left= change + 'px';
  evt.preventDefault();
}

function p2End(evt){
  var change= evt.changedTouches[0].clientX - startingX;
  var diff= screen.width / 4;
  if (change<diff) {
    p2.style.left= 0;
    p1.style.left= '-100%';
    p1.style.display= 'none';
  } else{
    p1.style.transition= 'all .3s';
    p2.style.transition= 'all .3s';
    p1.style.left= 0;
    p2.style.left= '100%';
    p2.style.display= 'none';
  }
}
