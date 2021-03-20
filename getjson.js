// JavaScript Document

$.getJSON('test.json', function(data){
				console.log(data.z[0.date])
				console.log(typeof data)
				//data = JSON.stringify(data)
				//data = Object.values(data);

				//var output = document.getElementById('jsont');
				//output.innerHTML = data[1];
				document.getElementById('jsont').innerHTML = data;
				});
