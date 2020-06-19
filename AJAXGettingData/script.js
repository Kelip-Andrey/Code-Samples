const div = document.getElementById('info');
const infoButton = document.getElementById('button');
let pageCounter = 1;

infoButton.addEventListener('click', function() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let requestData = JSON.parse(request.responseText);
      renderHTML(requestData);
    } else {
      alert('We connected to the server but it returned an error.');
    }
  };

  request.onerror = function() {
    alert('Something went wrong. Check your Internet connection');
  }

  request.send();  
  pageCounter++;

  if (pageCounter > 3) {
    infoButton.classList.add('hidden');
  }
})

function renderHTML(data) {
  let htmlString = "";
  data.forEach(pet => {
    htmlString += "<p>" + pet.name + " is a " + pet.species + " that likes to eat ";

    pet.foods.likes.forEach(goodFood => {
      htmlString += (goodFood + ', ');
    });
    htmlString = htmlString.slice(0, htmlString.length - 2);

    htmlString += " but doesn't like ";

    pet.foods.dislikes.forEach(badFood => {
      htmlString += (badFood + ', ');
    });
    htmlString = htmlString.slice(0, htmlString.length - 2);

    htmlString += ".</p>";
  });

  div.insertAdjacentHTML('beforeend', htmlString);
}
