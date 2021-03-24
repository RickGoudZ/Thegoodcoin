
$.ajax({
  type: "GET",  
  url: "data.csv",
  dataType: "text",       
  success: function(response) {
	console.log(response)
	//data = $.csv.toArrays(response);
	//var csvt = document.getElementById('csvdata').innerHTML = data;
  }   
});