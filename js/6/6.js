function check(){
    let email=document.getElementById("mail").value
    let [username,rest]=email.split("@")

    if(rest.includes(".") && username!=null){
    
        let [server,domain]=rest.split(".")
        if(domain.length>=2 && server.length>=1)
        {
         document.getElementById("valid").innerHTML="Valid Emailid"
        }
        else{
        document.getElementById("valid").innerHTML="Not a valid Emailid"
        }
    }
    else
    {
         document.getElementById("valid").innerHTML="Not a valid Emailid"
    }

}