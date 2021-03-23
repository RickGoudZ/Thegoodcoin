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

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('carrow').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('carrow').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('carrow').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('carrow').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('carrow').attachEvent('onmousewheel', scrollHorizontally);
    }
})();