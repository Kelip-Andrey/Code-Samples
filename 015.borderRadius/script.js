let div = document.getElementById('test');
  
let topLeft = document.getElementById('top-left');
topLeft.oninput = radiusLeftTop;
let topLeftValue = document.getElementById('top-left-value');
topLeftValue.innerHTML = topLeft.value + 'px';

function radiusLeftTop() {
  div.style.borderTopLeftRadius = topLeftValue.innerHTML = this.value + 'px';
}


let topRight = document.getElementById('top-right');
topRight.oninput = radiusRightTop;
let topRightValue = document.getElementById('top-right-value');
topRightValue.innerHTML = topRight.value + 'px';

function radiusRightTop() {
  div.style.borderTopRightRadius = topRightValue.innerHTML = this.value + 'px';
}


let bottomLeft = document.getElementById('bottom-left');
bottomLeft.oninput = radiusLeftBottom;
let bottomLeftValue = document.getElementById('bottom-left-value');
bottomLeftValue.innerHTML = bottomLeft.value + 'px';

function radiusLeftBottom() {
  div.style.borderBottomLeftRadius = bottomLeftValue.innerHTML = this.value + 'px';
}


let bottomRight= document.getElementById('bottom-right');
bottomRight.oninput = radiusRightBottom;
let bottomRightValue = document.getElementById('bottom-right-value');
bottomRightValue.innerHTML = bottomRight.value + 'px';

function radiusRightBottom() {
  div.style.borderBottomRightRadius = bottomRightValue.innerHTML = this.value + 'px';
}


let radius = document.getElementById('radius');
radius.oninput = borderRadius;
function borderRadius() {
  div.style.borderRadius = this.value + 'px';
  topLeft.value = topRight.value = bottomLeft.value = bottomRight.value = this.value;
  topLeftValue.innerHTML = topRightValue.innerHTML = bottomLeftValue.innerHTML = bottomRightValue.innerHTML = this.value + 'px';
}