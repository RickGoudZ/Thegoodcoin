// JavaScript Document
var staticUrl = 'https://jsonplaceholder.typicode.com/users';

var nissan = $.getJSON(staticUrl, function(data){
				console.log(data)
				data = KSON.stringify(data)
				console.log(data)
				var output = document.getElementById('jsont');
				output.innerHTML = data;
});
