apiclient=(function(){


	return {
		getBlueprintsByAuthor:function(authname,callback){

	        $.get("/blueprints/"+authname, function(data) {
	                                                    callback(data)});
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

	        $.get("/blueprints/"+authname+"/"+bpname, function(data) {
	                                                    callback(data)});
		    }

	}

})();


