function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 3, field.value.length);
    
    if ((usuario.length >=3) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 3)) {
    document.getElementById("email").innerHTML="E-mail válido"; 
    
    window.location.href = "enviado.html";
    }
    else{
    document.getElementById("email").innerHTML;
    alert("E-mail inválido");
    
    }
    }