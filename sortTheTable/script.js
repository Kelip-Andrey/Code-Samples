{
  
let tableBody = document.body.querySelector('tbody');
let persons = Array.from(tableBody.rows);

function sortByName() {
  persons.sort((a, b) => a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML));
  tableBody.append(...persons);  
}

function sortBySurname() {
  persons.sort((a, b) => a.cells[1].innerHTML.localeCompare(b.cells[1].innerHTML));
  tableBody.append(...persons);    
}

function sortByAge() {
  persons.sort((a, b) => a.cells[2].innerHTML - b.cells[2].innerHTML);
  tableBody.append(...persons);    
}

console.log(persons);

}