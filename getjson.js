// JavaScript Document
var staticUrl = 'https://www.thegoodcoin.nl/test.json';

$.getJSON(staticUrl, function(data){
	console.log(data)
});

function fonctiont() {	
		var output = document.getElementById('jsont');
		output.innerHTML = 'new content';
}