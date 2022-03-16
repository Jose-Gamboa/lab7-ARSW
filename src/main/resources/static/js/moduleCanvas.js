var moduleCanvas = (()=>{


 //private variables
var _canvas = document.getElementById('myCanvas');
var _context = _canvas.getContext("2d");

 //Canvas actual
 var _points = [];
 var _currentBP;

 var init = function (){
    if (window.PointerEvent) {
        _canvas.addEventListener("pointerdown", (event) => {
              //Verificar si ya hay un plano dibujado
              _currentAuthor = module.getAuthor();
              if (_currentAuthor !== undefined){
                //Punto encontrado
                var { pageX, pageY } = event;
                //Ejemplo context.fillRect(event.pageX-offset, event.pageY-offset, 5, 5);
                pageX = pageX - _canvas.offsetLeft; //X
                pageY = pageY - _canvas.offsetTop; // Y
                var point = {x: pageX, y: pageY}
                //Guardar el punto que ingresa el usuario
                _points.push(point);
                //Unir los nuevos puntos al final de lo que ya está dibujado en el canvas
                _context.lineTo(point.x, point.y);
                _context.stroke();
              }else{
                    //Si no se ha seleccionado un plano no debe dejar dibujar en el canvas
                    alert('Primero debe seleccionar un autor!!!');
              }
            });
    }
 }

 var getNewPoints= function (){
    return _points;
 }

 //returns an object with 'public' functions:
 return {
    init:init,
    getNewPoints:getNewPoints
 }

})();