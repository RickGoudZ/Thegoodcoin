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
				//#################
				var popAr = data[0].Audir8.pop();
				document.getElementById('LastAvrAr').innerHTML = popAr;
				//#################
				var popP9 = data[0].Porsche944.pop();
				document.getElementById('LastAvrP9').innerHTML = popP9;
				//#######350z###########
				var originalNb350z = data[0].Nissan350z.slice(-1);
				var increace350z = (popNz - originalNb350z)
				var increace350zPercentage = (increace350z / originalNb350z) * 100
				var rounded350z = Math.round(increace350zPercentage * 10) / 10
				document.getElementById('dif350z').innerHTML = (increace350zPercentage<0?"":"+") + rounded350z + "%";
				if (rounded350z >= 0) {
					dif350z.style.color = "rgb(223, 79, 54)";//red
				} else {
					dif350z.style.color = "rgb(75, 212, 75)";//green
				}
				//########R8##############
				var originalNbr8 = data[0].Audir8.slice(-1);
				var increacer8 = (popAr - originalNbr8)
				var increacer8Percentage = (increacer8 / originalNbr8) * 100
				var roundedr8 = Math.round(increacer8Percentage * 10) / 10
				document.getElementById('difr8').innerHTML = (increacer8Percentage<0?"":"+") + roundedr8 + "%";
				if (roundedr8 >= 0) {
					difr8.style.color = "rgb(223, 79, 54)";//red
				} else {
					difr8.style.color = "rgb(75, 212, 75)";//green
				}
				//#######944##############
				var originalNb944 = data[0].Porsche944.slice(-1);
				var increace944 = (popP9 - originalNb944)
				var increace944Percentage = (increace944 / originalNb944) * 100
				var rounded944 = Math.round(increace944Percentage * 10) / 10
				document.getElementById('dif944').innerHTML = (increace944Percentage<0?"":"+") + rounded944 + "%";
				if (rounded944 >= 0) {
					dif944.style.color = "rgb(223, 79, 54)";//red
				} else {
					dif944.style.color = "rgb(75, 212, 75)";//green
				}
				});