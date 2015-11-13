$(document).ready(function() {
  reloadData();
});
function reloadData() {
  $.ajax({
    url: "http://student.cs.appstate.edu/crr/3440/OtherExamples/BooneCurrentConditionsXML.php"
  }).success(function(data) {
    timeBox.textContent = $(data).find('time')[0].textContent;
    windBox.textContent = $(data).find('wind_direction')[0].textContent + " " + JSON.parse($(data).find('wind_speed')[0].textContent).toFixed();
    windBox.textContent += ", Gusts to " + JSON.parse($(data).find('wind_gust')[0].textContent).toFixed();
    
    humiBox.textContent = JSON.parse($(data).find('humidity')[0].textContent).toFixed();
    humiBox.textContent += "%";
    tempBox.textContent = JSON.parse($(data).find('temperature')[0].textContent).toFixed();
    tempBox.textContent += htmlDecode("&deg;")+"F"; 
    highBox.textContent = JSON.parse($(data).find('hi_temp')[0].textContent).toFixed();
    highBox.textContent += htmlDecode("&deg;")+"F";
    lowBox.textContent = JSON.parse($(data).find('lo_temp')[0].textContent).toFixed();
    lowBox.textContent += htmlDecode("&deg;")+"F";
    rainDayBox.textContent = JSON.parse($(data).find('rain_today')[0].textContent).toFixed();
    rainDayBox.textContent += "\"";
    rainBox.textContent = JSON.parse($(data).find('rain_month')[0].textContent).toFixed(); 
    rainBox.textContent += "\"";
    presBox.textContent = JSON.parse($(data).find('barometer')[0].textContent).toFixed();
    presBox.textContent += "in. Hg, " + $(data).find('barotrend')[0].textContent;
    chillBox.textContent = JSON.parse($(data).find('wind_chill')[0].textContent).toFixed();
    chillBox.textContent += htmlDecode("&deg;")+"F";
    heatBox.textContent = JSON.parse($(data).find('heat_index')[0].textContent).toFixed();
    dewBox.textContent = JSON.parse($(data).find('dew_point')[0].textContent).toFixed(); 
  });
}
function htmlDecode(input){
    var e = document.createElement('div');
      e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

