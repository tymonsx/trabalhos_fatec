function apareceDesaparece(id){
    var obj=document.getElementById(id);
    if(obj.style.display!="block"){
        obj.style.display="block";
    }
    else{
        obj.style.display="none";
    }
}

function increver(id){
    var objEmail=document.getElementById(id);
    alert('Obrigado por se inscrever! ' + objEmail.value);
}