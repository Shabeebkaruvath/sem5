
document.getElementById("change").addEventListener("click",function(){

    let color = document.getElementById("col")

    let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white"];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    color.style.backgroundColor = randomColor;
})