var data;
	$.ajax({
	  type: "GET",  
	  url: "data.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		document.getElementById('datat') = data;
	    console.log(response)
	  }   
	});