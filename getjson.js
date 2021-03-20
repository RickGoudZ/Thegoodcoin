// JavaScript Document
var staticUrl = 'https://jsonplaceholder.typicode.com/users';

var nissan = $.getJSON(staticUrl, function(data){
				console.log(data)
				data = JSON.stringify(data)
				//data = Object.values(data);

				//var output = document.getElementById('jsont');
				//output.innerHTML = data[1];
				document.getElementById('jsont').innerHTML = data[1];
});
"350z":[
	{"date":"03-12-2021", "price":"16340"},
	{"date":"04-12-2021", "price":"16230"}