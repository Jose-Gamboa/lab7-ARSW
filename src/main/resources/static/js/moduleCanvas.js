var moduleCanvas = (()=>{


 //private variables
var _canvas = document.getElementById('myCanvas');
var _context = _canvas.getContext("2d");


 //Canvas actual
 var _points = [];
 var _currentBP;

 var init = function (){
    console.log("Llegué al canvas............" + _canvas);
    if (window.PointerEvent) {
        _canvas.addEventListener("pointerdown", (event) => {
              //Verificar si ya hay un plano dibujado
              _currentBP = module.getBluePrint();

              if ( _currentBP !== undefined){
                //alert('pointerdown at '+event.pageX+','+event.pageY);
                //Punto encontrado
                var { pageX, pageY } = event;
                //Ejemplo context.fillRect(event.pageX-offset, event.pageY-offset, 5, 5);
                pageX = pageX - _canvas.offsetLeft; //X
                pageY = pageY - _canvas.offsetTop; // Y

                var point = {x: pageX, y: pageY}

                console.log("PUNTO  X" + event.pageX + "Y " + event.pageY );
                //Unir los nuevos puntos al final de lo que ya está dibujado en el canvas
                _context.lineTo(point.x, point.y);
                _context.stroke();

              }else{
                    //Si no se ha seleccionado un plano no debe dejar dibujar en el canvas
                    alert('Primero debe seleccionar un plano!!!');
              }
            });

  // Pointer events are supported.
    }

 }
 //returns an object with 'public' functions:
 return {
    init:init

 }

})();
