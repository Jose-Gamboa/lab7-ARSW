apimock=(function(){

	var mockdata=[];

	mockdata["johnconnor"]=	[{author:"johnconnor","points":[{"x":150,"y":120},{"x":215,"y":115}],"name":"house"},
	 {author:"johnconnor","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"gear"},{author:"johnconnor","points":[{"x":120,"y":20},{"x":12,"y":20}, {"x":34,"y":345}],"name":"triangle"},
	 {author:"johnconnor","points":[{"x":150,"y":150},{"x":190,"y":110},{"x":230,"y":150},{"x":230,"y":230},{"x":150,"y":230}, {"x":150,"y":150},{"x":230,"y":150} ],"name":"house2"}];

	mockdata["maryweyland"]=[
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"house2"},
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"gear2"}
	,{author:"maryweyland","points":[{"x":140,"y":140},{"x":11,"y":140}],"name":"square"},
	{author:"maryweyland","points":[{"x":350,"y":50},{"x":450,"y":50},{"x":500,"y":150},{"x":690,"y":150},{"x":690,"y":300},
	 {"x":600,"y":300},{"x":550,"y":350},{"x":500,"y":300}, {"x":350,"y":300},{"x":350,"y":50},{"x":250,"y":50},{"x":200,"y":150}
	 ,{"x":50,"y":150},{"x":50,"y":300},{"x":100,"y":300},{"x":150,"y":350},{"x":200,"y":300},{"x":200,"y":150},{"x":500,"y":150}
	 ,{"x":500,"y":300},{"x":200,"y":300},{"x":200,"y":150},{"x":250,"y":50}],"name":"auto"}];


	return {
		getBlueprintsByAuthor:function(authname,callback){
			callback(
				mockdata[authname]
			);
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){
			callback(
				mockdata[authname].find(function(e){return e.name===bpname})
			);
		}
	}

})();

/*
Example of use:
var fun=function(list){
	console.info(list);
}
apimock.getBlueprintsByAuthor("johnconnor",fun);
apimock.getBlueprintsByNameAndAuthor("johnconnor","house",fun);*/