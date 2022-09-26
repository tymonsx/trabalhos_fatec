function alerta(){
    alert("As instruções foram enviadas para seu endereço de e-mail!");
}

function menu(id){
    var obj=document.getElementById(id);
    if(obj.style.display!="block"){
        obj.style.display="block";
    }
    else{
        obj.style.display="none";
    }
}