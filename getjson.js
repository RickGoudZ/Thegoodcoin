// JavaScript Document
var staticUrl = 'https://jsonplaceholder.typicode.com/users'

$.getJSON('test.json', function(data){
				console.log(data)
				//data = JSON.stringify(data)
				//data = Object.values(data);

				//var output = document.getElementById('jsont');
				//output.innerHTML = data[1];
				//document.getElementById('jsont').innerHTML = data;
				for (i = 0; i < data.length; i = i + 1){
					console.log(data[i].name)
				}
});
