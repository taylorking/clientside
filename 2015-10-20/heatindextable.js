var cbn = document.getElementById("createBtn");
var cautButton = document.getElementById("cautionBtn");
var container = document.getElementById("table-container");
window.onload=init;
function init() {
  cbn.onclick = createHeatIndexTable;
  cautButton.onclick=popCautionBox;
}
function popCautionBox() {
  var month = document.getElementsByName("monthBox")[0].value;
  var day = document.getElementsByName("dayBox")[0].value; 
  var year = document.getElementsByName("yearBox")[0].value;
  var dayHumidity = document.getElementsByName("dayHumidityBox")[0].value;
  var dayTemp = document.getElementsByName("dayTempBox")[0].value;
  var d = new Date(year, parseInt(month) -1, day);
  var hi = heatIndex(dayTemp, dayHumidity);
  var cautionLevel;
  if(hi < 80) {
    cautionLevel = "No Caution";
  } else if(hi < 90) {
    cautionLevel = "Caution";
  } else if(hi < 104) {
    cautionLevel = "Extreme Caution";
  } else if(hi < 125) {
    cautionLevel = "Danger";
  } else {
    cautionLevel = "Extreme Danger";
  }
  alert("Date: " + d.toDateString() + "\nHeat Index: " + Math.round(hi) + "\nCaution Level: " + cautionLevel);

}
function createHeatIndexTable() {
  var maxTemp = document.getElementsByName("maxTempBox")[0].value;
  var minTemp = document.getElementsByName("minTempBox")[0].value;
  var maxHumi = document.getElementsByName("maxHumidityBox")[0].value;
  var minHumi = document.getElementsByName("minHumidityBox")[0].value;
  if(container.children.length > 0) {
    container.removeChild(container.children[0]);
  }
  container.appendChild(document.createElement("table"));
  var heatTable = container.children[0];
  var r = heatTable.insertRow();
  var c = r.insertCell();
  c.textContent = "°F";
  for(i = maxHumi; i >= minHumi; i-=10) {
    c = r.insertCell();
    c.textContent = i.toString() + "%";
  }
  for(temp = parseInt(minTemp); temp <= parseInt(maxTemp); temp+=5) {
    r = heatTable.insertRow();
    c = r.insertCell();
    c.textContent = temp;
    for(humi = maxHumi; humi >= minHumi; humi -= 10) {
      c = r.insertCell();
      c.textContent = Math.round(heatIndex(temp, humi));
    }
  }
}

function heatIndex(temperature, relativeHumidity) { if (temperature < 80) { console.log(temperature + " is lower than 80. Heat index not calculated."); return temperature; } if (relativeHumidity < 40) { console.log(relativeHumidity + " is lower than 40. Heat index not calculated."); return temperature; } var t = temperature; var r = relativeHumidity; var t2 = Math.pow(t, 2); var rh2 = Math.pow(r, 2); var index = -42.379 + 2.04901523 * t + 10.14333127 * r - 0.22475541 * t * r - 6.83783e-03 * t2 - 5.481717e-02 * rh2 + 1.22874e-03 * t2 * r + 8.5282e-04 * t * rh2 - 1.99e-06 * t2 * rh2; return index; }
