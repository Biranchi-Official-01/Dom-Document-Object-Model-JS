var btn = document.querySelector("button");
var main = document.querySelector("main");

btn.addEventListener("click", function(){
    var div = document.createElement("div");
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.position = "absolute";
    
    var x = Math.random()*100
    var y = Math.random()*100
    var v1 =Math.floor(Math.random()*256)
    var v2 =Math.floor(Math.random()*256)
    var v3 =Math.floor(Math.random()*256)
    
    
    div.style.top = y + "%";
    div.style.left = x + "%";
    
    div.style.backgroundColor = `rgb(${v1},${v2},${v3})`;
    div.style.rotate = Math.random()*360 + "deg";   



    main.appendChild(div);
    
})