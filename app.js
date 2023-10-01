document.addEventListener("DOMContentLoaded", function() {

    const inputTodoList = document.getElementById("input_todolist");
    const agregar = document.getElementById("button_agregar");
    const eliminar = document.getElementById("button_borrar");
    const lista = document.getElementById("lista_todoList");

agregar.addEventListener("click", function() {
    const textoAñadido = inputTodoList.value.trim();
    if (textoAñadido !== "") {
        const nueva_tarea = document.createElement("li");
        nueva_tarea.innerHTML = `
        <span>${textoAñadido}</span>
            <button class="listo">Completar</button>
            <button class="borrar">Borrar</button>
        `
        lista.appendChild(nueva_tarea);
        inputTodoList.value = "";
    }
});

eliminar.addEventListener("click", function () {
    inputTodoList.value = "";

});

lista.addEventListener("click", function(evento) {

//Mediante .target vamos a hacer referencia al elemento HTML en el que se hizo click.
    const target = evento.target;
    if (target.classList.contains("listo")){
    const tarea = target.parentElement;
    const span = tarea.querySelector("span");
    const checkInicial = span.querySelector(".check");
    if(!checkInicial){
        const check = document.createElement("span");
        check.classList.add("check");
        check.textContent = "✔";
        span.appendChild(check);
        tarea.setAttributes("data-completada", "true");
    }
    
    else{
        const completada = tarea.getAttribute("data-completada");
        if(completada === "true") {
            checkInicial.remove();
        }
    }

    }

    else if (target.classList.contains("borrar")){
        target.parentElement.remove();
    }
    
});

});


//NUEVAS HERRAMIENTAS APLICADAS:

/* línea 9: investigando, nos dimos cuenta que con trim, se puede omitir la consideración de espacios en blanco dentro del input.

Línea 10: Se utilizo ! que es un operador que significa "no igual a", y el == se utilizó ya que es un operador de igualdad no estricto, y el más apropiado para el caso.

Se utilizó setAttributes y getAtribute para gestionar el estado de la tarea en la lista obtenida. Se utilizó para manipular la adición o eliminación del elemento check, lo cual nos indicaría si la tarea añadida ya fue realizada o aún no.

En la línea 43, añadí else, para que cada vez que realice un clic en completar, no se añada un nuevo check, ya que sino serían dos, y solo quiero uno al hacer click en "completar". Se estableció la remoción de la variable checkInicial si es que la información de data completada es true, lo cual se estableció en la línea 40. De esa forma se eliminó la repetición. 

Se aplicaron nuevos métodos de tal forma que en el presente ejercicio se lograrán explorar otras formas de conseguir la funcionalidad del ejercicio.
 */


