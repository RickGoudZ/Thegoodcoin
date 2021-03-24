
$.ajax({
  type: "GET",  
  url: "data.csv",
  dataType: "text",       
  success: function(response) {
	console.log(typeof document.getElementById('csvdata').innerHTML =response)
	//data = $.csv.toArrays(response);
	document.getElementById('csvdata').innerHTML = response;
  }   
});