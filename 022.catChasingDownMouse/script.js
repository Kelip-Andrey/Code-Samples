document.onmousemove = function() {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="images/cat64.png" id="cat">');

  let cat = document.getElementById('cat');
  cat.style.position = 'fixed';

  document.onmousemove = function(event) {
    cat.style.left = event.clientX + 20 + 'px';
    cat.style.top = event.clientY + 20 + 'px';
  }
}