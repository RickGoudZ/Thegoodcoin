// JavaScript Document
var staticUrl = 'https://www.thegoodcoin.nl/test.json';

var nissan = $.getJSON(staticUrl, function(){
				console.log(nissan);
});

function fonctiont() {	
		var output = document.getElementById('jsont');
		output.innerHTML = nissan;
}