function aclarar(){
    document.body.style.backgroundColor = '#F7AD35';
    document.getElementById("f").style.borderColor="#f0851b";
    document.querySelector(".contenido").style.borderColor="#f0851b";
    document.querySelector(".checkmark").style.backgroundColor="#0f042b";
    const elements = document.querySelectorAll(".oscuro_claro");
    elements.forEach(element => {
        element.style.color = "black";
    });
    document.querySelector(".titulo").style.color="#0f042b";
    document.querySelector(".lista").style.color="#000";
    Aclararletralista()
    document.querySelector(".pedro").style.borderColor="#f0851b";
    Aclararcolorletrasparrafo()
    document.querySelector(".creador").style.color="#000";

}

function Aclararletralista() {
    const elements = document.querySelectorAll(".objeto_lista");
    elements.forEach(element => {
        element.classList.remove("transicion");  // Añade la clase de transición
    });
}
function Aclararcolorletrasparrafo(){
    const elements = document.querySelectorAll(".p2");
    elements.forEach(element => {
    element.style.color = "#000";
});
}