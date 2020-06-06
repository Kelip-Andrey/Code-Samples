let block = document.getElementById('test');
let positionLeft = 0;
let positionTop = 0;

document.onkeydown = function(event) {
  (event.key == 'ArrowRight') ? positionLeft+=6 :
  (event.key == 'ArrowLeft') ? positionLeft-=6 :
  (event.key == 'ArrowDown') ? positionTop+=6 : 
  (event.key == 'ArrowUp') ? positionTop-=6 : true;
    block.style.left = positionLeft + 'px';
    block.style.top = positionTop + 'px';

}