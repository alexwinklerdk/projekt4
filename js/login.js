function sub(){
    let user=document.getElementById("user").value 
    let code=document.getElementById("code").value
    let check=0
    let usercode=[user,code] 
    for(let i=0;i<usercode.length; i++){
        if (usercode[i].length==0){
        }else{check++

        }
    } 
    if(check==2) {window.location.href="index.html"}else{
        alert("Manglende indtastning")
    }
}
