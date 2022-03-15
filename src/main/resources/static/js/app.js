var module = (function(){

    var _author;
    //Nombre plano, Numero puntos
    var _bluePrints = [];
    var _module = apiclient;
    var _canvas = moduleCanvas;
    var _currentBP;
    //Nuevo para sacar puntos
    var _points = [];

    init();

    function init(){
        console.log("Llamando al canvas............");
        _canvas.init();
    }

    var getBluePrintsByAuthor = function () {
        _bluePrints = [];
        $("#tablebp > tbody").empty();
        _author = document.getElementById('author').value;
        setAuthor(_author);
        setBluePrints(_author);

    }

    var setAuthor = function (name) {
        $("#name_author").text(name + "'s blueprints: ");
    }

    var setBluePrints = function (author){
        _module.getBlueprintsByAuthor(author, _getNameAndSize);
    }

    var _getNameAndSize  = function (blueprintsArray){
        _bluePrints = blueprintsArray.map(blueprint => [blueprint.name, blueprint.points.length]);
        _setTable(_bluePrints);
    }

    var _setTable = function (bpArray){
        //Agrega cada fila de la tabla
        //Ponerle al boton el mismo nombre del plano para sacar el id del botón al dibujar
        bpArray.map(blueprint => $("table tbody").append("<tr><td>" + blueprint[0] + "</td><td>" + blueprint[1] + "</td><td><button  class='btn btn-secondary' id="+blueprint[0] +" "+ "type='button' onclick=module.getBluePrintToShow(this)>Open</button></td></tr>"));
        var numArray = bpArray.map(blueprint => blueprint[1]);
        //Agrega el total de puntos
        $("#total_points").text(" Total user points: " + numArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0));
    }

    var getBluePrintToShow = function(button){
        nameBP = button.id;
        //Guardar nombre
        _currentBP = nameBP;
        _module.getBlueprintsByNameAndAuthor(_author,nameBP,_drawInCanvas);
        _module.getBlueprintsByNameAndAuthor(_author,nameBP,setPoints);
    }

    //Nueva funcion para guardar los puntos del plano mostrado en ese momento
    var setPoints = function(pointsToMap){
        //pointsToMap.points.map( point => _points.push(point));
        console.log("Obtuve y guarde los puntos " + _points);
        _points = pointsToMap;
    }
    //Nueva para retormar los puntos del plano seleccionado actual
    var getPoints = function(){
        return _points;
    }

    //Nueva para retornar el plano
    var getBluePrint = function(){
        return _currentBP;
    }


    var _drawInCanvas = function(pointsOne){
        _currentBP =  document.getElementById('author').value;

        $("#currentbp").text("Current blueprint: "+ pointsOne.name);
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        //RECORRER PARA JUNTAR Y DIBUJAR
        ctx.moveTo(pointsOne.points[0].x, pointsOne.points[0].y);

        for(var i = 1; i < pointsOne.points.length; i++){
            ctx.lineTo(pointsOne.points[i].x, pointsOne.points[i].y);
        }
        ctx.lineTo(pointsOne.points[0].x, pointsOne.points[0].y);
        ctx.strokeStyle = "grey";
        ctx.stroke();
        //Recorrer los puntos y unir
    }

    var savePoints = function(){
        var data =  _points.points.concat(_canvas.getNewPoints());
        _points.points = data;
        _module.putBluePrintByNameAndAuthor( _author, nameBP, _points);
        setBluePrints(_author);
    }



    return {
        getBluePrintsByAuthor:getBluePrintsByAuthor,
        getBluePrintToShow:getBluePrintToShow,
        init:init,
        getBluePrint:getBluePrint,
        setPoints:setPoints,
        getPoints:getPoints,
        savePoints:savePoints
    };

})();