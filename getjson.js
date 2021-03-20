// JavaScript Document
var staticUrl = 'https://www.thegoodcoin.nl/test.json';

$.ajax({
    url: 'https://www.thegoodcoin.nl/test.json',

    dataType: "jsonp",
    success: function(response) {
        console.log(response); // server response
    }

});
/*$.getJSON(staticUrl, function(data){
	console.log(data)
});*/

function fonctiont() {	
		var output = document.getElementById('jsont');
		output.innerHTML = response;
}