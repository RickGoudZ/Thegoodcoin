// JavaScript Document
$.getJSON('test.json', function(data){
				console.log(data[0].Nissanzp)
				console.log(typeof data)
				//data = JSON.stringify(data)
				//data = Object.values(data);

				var output = document.getElementById('jsont');
				output.innerHTML = data[0].date;
				var popNz = data[0].Nissanzp.pop(); //pop = last from array.
				document.getElementById('LastAvrNz').innerHTML = popNz;
				var popAr = data[0].Audirp.pop();
				document.getElementById('LastAvrAr').innerHTML = popAr;
				});

$.getJSON('data.csv', function(csv){
				console.log(csv)
				console.log(typeof csv)
				//var csv = Papa.parse(csv)
				//var output = document.getElementById('datat') = csv;
			}
			);