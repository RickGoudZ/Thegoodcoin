// JavaScript Document
var staticUrl = 'https://thegoodcoin.nl/test.json';

$.getjson(staticUrl, function(data){
	console.log(data)
});

function fonctiont() {	
		var output = document.getElementById('jsont');
		output.innerHTML = 'new content';
}