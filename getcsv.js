
$.ajax({
  type: "GET",  
  url: "data.csv",
  dataType: "text",       
  success: function(response) {
	var data = document.getElementById('csvdata').innerHTML = response;
	console.log(typeof data)
	//data = $.csv.toArrays(response);
	document.getElementById('csvdata').innerHTML = response;
  }   
});