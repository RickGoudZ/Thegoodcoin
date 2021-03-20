// JavaScript Document
var staticUrl = 'https://jsonplaceholder.typicode.com/users';

var nissan = $.getJSON(staticUrl, function(data){
				console.log(data.name)
				var output = document.getElementById('jsont');
				output.innerHTML = data.email;
});

function fonctiont() {	
		var output = document.getElementById('jsontd');
		output.innerHTML = 'new content';
}