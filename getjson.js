// JavaScript Document
var staticUrl = 'https://jsonplaceholder.typicode.com/users';

var nissan = $.getJSON(staticUrl, function(data){
				console.log(data)
				//data = JSON.stringify(data)
				data = JSON.stringify(data)
				console.log(data.id)
				var output = document.getElementById('jsont');
				output.innerHTML = data.id;
});
