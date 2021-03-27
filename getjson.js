// JavaScript Document
$.getJSON('dataJSON.json', function(data){
				console.log(data[0].Nissan350z)
				console.log(typeof data)
				//data = JSON.stringify(data)
				//data = Object.values(data);

				//var output = document.getElementById('jsont');
				//output.innerHTML = data[0].date;
				//#################
				var popNz = data[0].Nissan350z.pop(); //pop = last from array.
				document.getElementById('LastAvrNz').innerHTML = popNz;
				var dif350z = data[0].Nissan350z.slice(-2, -1)[0];
				document.getElementById('test').innerHTML = dif350z;
				//#################
				var popAr = data[0].Audir8.pop();
				document.getElementById('LastAvrAr').innerHTML = popAr;
				var popP9 = data[0].Porsche944.pop();
				document.getElementById('LastAvrP9').innerHTML = popP9;
				//var testcsv = document.getElementById('csv2').innerHTML = 
				});