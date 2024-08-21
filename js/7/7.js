document.getElementById("submit").addEventListener("click",function(){
    let password1=document.getElementById("pass1").value
    let password2=document.getElementById("pass2").value

    console.log(password1)
    console.log(password2)
    
    if(password1.length<8 ){
        let p2v = document.getElementById("p1v")
        p2v.style.color="red"
        p2v.innerHTML="Password must contain 8 characters"
        
    }
    else{
         document.getElementById("p1v").innerHTML=""
        if(password2!==password1 ){
            document.getElementById("p2v").style.color="red"
            document.getElementById("p2v").innerHTML="not the same password"
        }
        else{
            let p2v = document.getElementById("p2v")
            p2v.style.color="green"
            p2v.innerHTML="Valid password"

        }
    }

})