{

let container = document.getElementById('calendar-container');
let yearInput = document.getElementById('date-year');
let monthInput = document.getElementById('date-month');
let button = document.getElementById('create-calendar');


button.onclick = function (event, elem = container, year = yearInput.value, month = monthInput.value) {
  container.innerHTML = "";

  let table = document.createElement('table');
  table.innerHTML = "<tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr>";

  let startTDCount = 0;
  let daysCount = 1;
  let date = new Date(year, month, daysCount);

  // change start count if the first day is sunday
  if (date.getDay() == 0) startTDCount = -7;

  //create rows
  for (let i = 0; i < 6; i++) { 
    // don't create row if it's the next month
    if (date.getMonth() != month) continue;

    let row = document.createElement('tr');

    //create cells
    for(let j = 0; j < 7; j++) { 
      let td = document.createElement('td');

      // find first day to start filling the table
      startTDCount++;
      if (date.getDay() <= startTDCount) {

        // check for changing the month to stop filling the table
        if (date.getMonth() == month) {
          td.innerHTML = date.getDate();
          daysCount++;
          date = new Date(year, month, daysCount);
        }
      }
      
      row.append(td);
    }

    table.append(row);
  }

  elem.append(table);
}

}