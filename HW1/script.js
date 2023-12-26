var div = document.getElementsByTagName("div")[0];

div.onmousemove = function (event) {

    event = event;
 
    var pagex = event.pageX;
    var pagey = event.pageY;
   
    this.innerHTML = "X座標：" + pagex + "px;<br>Y座標：" + pagey + "px;"
}