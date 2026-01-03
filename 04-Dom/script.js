var grow = 0;
var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var inner = document.querySelector(".inner");

btn.addEventListener("click", function(){
    btn.innerHTML="Downloading...";
    btn.style.pointerEvents="none";
    var stop = setInterval(() => {
        grow++;
        h2.innerHTML=grow+"%";
        inner.style.width=grow+"%";
    }, 100);

    setTimeout(()=>{
        clearInterval(stop);
        btn.innerHTML="✅ Downloaded";
        btn.style.opacity="0.6";
    },10000)
    
})