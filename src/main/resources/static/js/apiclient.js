apiclient=(function(){


	return {
		getBlueprintsByAuthor:function(authname,callback){

	        $.get("/blueprints/"+authname, function(data) {
	                                                    callback(data)});
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

	        $.get("/blueprints/"+authname+"/"+bpname, function(data) {
	                                                    callback(data)});
		},

        putBluePrintByNameAndAuthor:function(authname,bpname,points){
            console.log("");
            $.ajax({
                url: "http://localhost:8080/blueprints/"+authname+"/"+bpname,
                type: 'PUT',
                data: JSON.stringify(points),
                contentType: "application/json"
            }).then(function(){
                console.log("Then in put");
            });
        }
    }
})();


