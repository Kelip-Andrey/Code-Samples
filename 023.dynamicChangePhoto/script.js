document.getElementById('my-slide').onmousemove = function(event) {
  let x = event.offsetX;
  document.getElementById('one').style.width = x + 'px';
}

document.getElementById('my-slide').onmouseleave = function(event) {
  document.getElementById('one').style.width = '1024px';
}