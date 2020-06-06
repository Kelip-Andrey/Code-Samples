let testBlock = document.getElementById('test');

testBlock.onclick = function() {    //click
  this.style.background = 'green'; 
}

testBlock.ondblclick = function() {   //double click
  this.style.background = "red";
}

testBlock.oncontextmenu = function() {
  this.style.background = 'blue';
  return false;
}

testBlock.onmouseenter = function() {
  this.style.background = 'yellow';
}

testBlock.onmouseleave = function() {
  this.style.background = 'orange';
  this.style.width = '150px';
}

let extension = 0;
testBlock.onmousemove = function() {
  extension++;
  this.style.width = 150 + extension + 'px';
}

testBlock.onmousedown = function(event) {
  if (event.button === 2) {
    this.style.backgroundImage = 'url("D:/5 работа/Learning Projects/лущенко/021.mouseEvents/images/mouse.png")';
  }
}

