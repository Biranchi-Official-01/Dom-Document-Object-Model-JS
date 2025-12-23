var scr = document.querySelector('.screen');
var inc = document.querySelector('.inc');
var dec = document.querySelector('.dec');

var a=0;

inc.addEventListener('click',function(){
    a++
    scr.innerHTML=a
})
dec.addEventListener('click',function(){
    a--
    scr.innerHTML=a
})