$(document).ready(function () {
nameBox.onchange = update;
dayBox.onchange = update;
monthBox.onchange = update;
yearBox.onchange = update;
tricks.onchange = update;
});
function update() {
  var d = new dog(nameBox.value, yearBox.value, monthBox.value, dayBox.value);
  nameOutput.textContent = d.name;
  birthDayOutput.textContent = d.birthDate.toDateString();
  trickOutput.textContent = d[tricks.value]();
}
