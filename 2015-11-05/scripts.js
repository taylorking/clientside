$(document).ready(function() {
  reloadData();
});

function reloadData() {
  $.ajax({"url": "http://student.cs.appstate.edu/crr/3440/OtherExamples/BooneCurrentConditionsJSONP.php"});
}
function updateConditions(data) {
    timeBox.textContent = data.time;
    windBox.textContent =  + " " + JSON.parse(data.wind_speed).toFixed();
    windBox.textContent += ", Gusts to " + JSON.parse(data.wind_gust).toFixed();
    
    humiBox.textContent = JSON.parse(data.humidity).toFixed();
    humiBox.textContent += "%";
    tempBox.textContent = JSON.parse(data.temperature).toFixed();
    tempBox.textContent += htmlDecode("&deg;")+"F"; 
    highBox.textContent = JSON.parse(data.hi_temp).toFixed();
    highBox.textContent += htmlDecode("&deg;")+"F";
    lowBox.textContent = JSON.parse(data.lo_temp).toFixed();
    lowBox.textContent += htmlDecode("&deg;")+"F";
    rainDayBox.textContent = JSON.parse(data.rain_today).toFixed();
    rainDayBox.textContent += "\"";
    rainBox.textContent = JSON.parse(data.rain_month).toFixed(); 
    rainBox.textContent += "\"";
    presBox.textContent = JSON.parse(data.barometer).toFixed();
    presBox.textContent += "in. Hg, " + data.barotrend;
    chillBox.textContent = JSON.parse(data.wind_chill).toFixed();
    chillBox.textContent += htmlDecode("&deg;")+"F";
    heatBox.textContent = JSON.parse(data.heat_index).toFixed();
    dewBox.textContent = JSON.parse(data.dew_point).toFixed(); 
}
function htmlDecode(input){
    var e = document.createElement('div');
      e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

