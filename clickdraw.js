/*
Yuyang Zhang
Softdev2 pd07
HW#00 - See a Red Door...
2018-02-03
*/

//retrieve node in DOM via ID
var c = document.getElementById("slate");
  //instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

var q = 0;
var x1,y1,x2,y2;



var circle = function(e){
    e.preventDefault();
    x1 = e.offsetX;
    y1 = e.offsetY;
    ctx.beginPath()
    ctx.arc(x2,y2, 10, 0, 2*Math.PI)
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
    x2 = x1;
    y2 = y1;
}


var rect = function(e){
    e.preventDefault();
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.fillRect(x,y, 10, 10)
}


//uses the previous two functions as helper functions
var draw = function(e){
    if (q == 0){
	circle(e);
	circle(e);	
  }
  else{
      rect(e);
  }
}

c.addEventListener("click", draw);


//uses to recgonize circles by 0 and rectangles by 1
document.getElementById('toggle').onclick = function(){
  if (q == 0){
    q = 1;
  }
  else{
    q = 0;
  }
}

//removes canvas
var erase = function(e){
  e.preventDefault();
  ctx.clearRect(0, 0, c.width, c.height)
}

var clear = document.getElementById("clear")
clear.addEventListener("click", erase);
