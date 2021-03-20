// JavaScript Document
var staticUrl = 'https://thegoodcoin.nl/test.json?callback=?';

var nissan = $.getJSON(staticUrl, function(data){
				console.log(data)
				data = JSON.stringify(data)
				//data = Object.values(data);

				//var output = document.getElementById('jsont');
				//output.innerHTML = data[1];
				document.getElementById('jsont').innerHTML = data;
});
