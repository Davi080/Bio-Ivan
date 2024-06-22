function quienes(){
    document.getElementById("imformacion_lis").style.display="block";
    trancicion()
    document.getElementById("info2").style.display="none ";
    document.getElementById("info3").style.display="none";
    document.getElementById("info4").style.display="none";

}
function Deca(){
    document.getElementById("imformacion_lis").style.display="block";
    document.getElementById("info1").style.display="none";
    trancicion2()
    document.getElementById("info3").style.display="none";
    document.getElementById("info4").style.display="none";

}
function Estudi(){
    document.getElementById("imformacion_lis").style.display="block";
    document.getElementById("info1").style.display="none";
    document.getElementById("info2").style.display="none";
    trancicion3()
    document.getElementById("info4").style.display="none";

}
function Redes(){
    document.getElementById("imformacion_lis").style.display="block";
    document.getElementById("info1").style.display="none";
    document.getElementById("info2").style.display="none";
    document.getElementById("info3").style.display="none";
    trancicion4()

}

function trancicion(){
    var div = 
    document.getElementById("info1")
    div.style.display = 'inline-block'; // Muestra el div
    div.classList.add('fade-in'); 
}
function trancicion2(){
    var div = 
    document.getElementById("info2")
    div.style.display = 'inline-block'; 
    div.classList.add('fade-in'); 
}
function trancicion3(){
    var div = 
    document.getElementById("info3")
    div.style.display = 'inline-block' ; 
    div.style.width= "90%";
    div.classList.add('fade-in'); 
}
function trancicion4(){
    var div = 
    document.getElementById("info4")
    div.style.display = 'inline-block';
    div.style.width="70%";
    div.classList.add('fade-in'); 
}