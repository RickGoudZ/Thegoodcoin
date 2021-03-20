// JavaScript Document
var staticUrl = 'https://jsonplaceholder.typicode.com/users';

var nissan = $.getJSON(staticUrl, function(data){
				console.log(data)
				console.log(nissan)
});

function fonctiont() {	
		var output = document.getElementById('jsont');
		output.innerHTML = 'new content';
}