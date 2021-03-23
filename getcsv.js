
$.ajax({
  type: "GET",  
  url: "data.csv",
  dataType: "text",       
  success: function(response)  
  {
	data = $.csv.toArrays(response);
	var csvt = document.getElementById('datat') = response;
	console.log(response)
  }   
});