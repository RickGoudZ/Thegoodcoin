// JavaScript Document
function setup() {
  loadJSON('thegoodcoin.nl/test.json', gotData, 'jsonp');
}

function gotData(data) {
  print(data);
  spaceData = data;
}