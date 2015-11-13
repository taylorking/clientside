$(document).ready(function() {
  refresh();
});
function refresh() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://student.cs.appstate.edu/crr/3440/OtherExamples/BooneCurrentConditions.php");
  req.onreadystatechange = function() {
    var text = req.responseText;
    date = text.split('\n')[0].split(' ')[0];
    datebox.textContent = date;
    time = text.split('\n')[0].split(' ')[1];
    timebox.textContent = time; 
    temperature = text.split('\n')[1];
    temperaturebox.textContent = temperature;
    high = text.split('\n')[2];
    temphighbox.textContent = high;
    low = text.split('\n')[3];
    templowbox.textContent = low;
    humidity = text.split('\n')[4];
    humiditybox.textContent = humidity;
    windspeed = text.split('\n')[5];
    windspeedbox.textContent = windspeed; 
  }
  req.send();
}
