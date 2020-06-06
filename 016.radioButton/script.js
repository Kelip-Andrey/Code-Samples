let radioButtons = document.getElementsByName('fruit');
radioButtons.forEach(function(button) {
  button.onchange = testRadio;
})

function testRadio() {
  console.log(this.value);
}

document.getElementById('one').onclick = checkRadio;
function checkRadio() {
  radioButtons.forEach(function(i) {
    if (i.checked) {
      alert(i.value + ' is checked');
    }
  })
}