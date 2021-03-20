// JavaScript Document
var staticUrl = 'https://jsonplaceholder.typicode.com/users';

$.getJSON(staticUrl, function(data){
	console.log(data)
});

function fonctiont() {	
		var output = document.getElementById('jsont');
		output.innerHTML = 'new content';
}