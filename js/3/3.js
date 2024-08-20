
document.getElementById("add").addEventListener("click",function(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("res").innerHTML=num1+num2
})

document.getElementById("sub").addEventListener("click",function(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("res").innerHTML=num1-num2
    
})

document.getElementById("mul").addEventListener("click",function(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("res").innerHTML=num1*num2
    
})

document.getElementById("div").addEventListener("click",function(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    document.getElementById("res").innerHTML=num1/num2
     
})