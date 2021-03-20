// JavaScript Document
function fonctiont() {
var staticUrl = 'https://www.thegoodcoin.nl/test.json';

var nissan = $.getJSON(staticUrl, function(nissan){
console.log(nissan);
});


		var output = document.getElementById('jsont');
		output.innerHTML = nissan;
}