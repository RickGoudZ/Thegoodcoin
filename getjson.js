// JavaScript Document
$.getJSON('dataJSON.json', function(data){
				console.log(data[0].Nissan350z)
				console.log(typeof data)
				//data = JSON.stringify(data)
				//data = Object.values(data);

				//var output = document.getElementById('jsont');
				//output.innerHTML = data[0].date;
				var popNz = data[0].Nissan350z.pop(); //pop = last from array.
				document.getElementById('LastAvrNz').innerHTML = popNz;
				var popAr = data[0].Audir8.pop();
				document.getElementById('LastAvrAr').innerHTML = popAr;
				//var testcsv = document.getElementById('csv2').innerHTML = 
				});