// JavaScript Document
$.getJSON('test.json', function(data){
				console.log(data[0].Nissanzp)
				console.log(typeof data)
				//data = JSON.stringify(data)
				//data = Object.values(data);

				//var output = document.getElementById('jsont');
				//output.innerHTML = data[1];
				var popNz = data[0].Nissanzp.pop();
				document.getElementById('LastAvrNz').innerHTML = popNz;
				var popAr = data[0].Audirp.pop();
				document.getElementById('LastAvrAr').innerHTML = popAr;
				});
