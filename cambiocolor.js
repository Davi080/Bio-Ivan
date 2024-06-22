function oscurecer(){
    document.body.style.backgroundColor = '#05010F';
    document.getElementById("f").style.borderColor="#0f042b";
    document.querySelector(".contenido").style.borderColor="#0f042b";
    document.querySelector(".checkmark").style.backgroundColor="#0f042b";
    const elements = document.querySelectorAll(".oscuro_claro");
    elements.forEach(element => {
        element.style.color = "#f0851b";
    });
    document.querySelector(".titulo").style.color="#DC740E";
    document.querySelector(".lista").style.color="#F0BD89";
    letralista()
    document.querySelector(".pedro").style.borderColor="#0f042b";
    colorletrasparrafo()
    document.querySelector(".creador").style.color="#f0851b";


}

function letralista() {
    const elements = document.querySelectorAll(".objeto_lista");
    elements.forEach(element => {
        element.classList.add("transicion");  // Añade la clase de transición
    });
}

function colorletrasparrafo(){
    const elements = document.querySelectorAll(".p2");
    elements.forEach(element => {
    element.style.color = "#F0BD89";
});
}

function colorletrasparrafo(){
    const elements = document.querySelectorAll(".p2");
    elements.forEach(element => {
    element.style.color = "#F0BD89";
});
}
