var box = document.querySelector('#box')
var btn = document.querySelector('button')

btn.addEventListener('click',function(){
    var v1 = Math.floor(Math.random()*256)
    var v2 = Math.floor(Math.random()*256)
    var v3 = Math.floor(Math.random()*256)

    box.style.backgroundColor = `rgb(${v1} ${v2} ${v3})`
    
})