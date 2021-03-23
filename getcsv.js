var data;
	$.ajax({
	  type: "GET",  
	  url: "data.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		var output = document.getElementById('datat') = response;
	    console.log(response)
	  }   
	});