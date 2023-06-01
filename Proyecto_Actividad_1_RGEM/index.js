function AgregarTarea(){
    const input = document.getElementById("TxtAgregar");
    const text = input.value;

    if (text.length){
        const list = document.getElementById("ContenedorProcesos");
        
        const Newlist = document.createElement("div");
        Newlist.setAttribute("class", "Procesos");
        const newCheck = document.createElement("input");
        newCheck.type = "checkbox";
        newCheck.setAttribute("class", "ChecksB");
        newCheck.setAttribute("onchange", "CompletarTarea(event)")
        const newText = document.createElement("p");
        newText.setAttribute("class", "ParrafosProcesos")
        newText.textContent = " " + text;


        const newButtonEliminar = document.createElement("button");
        const newButtonEditar = document.createElement("button");
        const newTipoLetra = document.createElement("b");
        const newTipoLetra2 = document.createElement("b");

        newTipoLetra.textContent = "Eliminar";
        newTipoLetra2.textContent = "Editar";

        newButtonEditar.appendChild(newTipoLetra2);
        newButtonEliminar.appendChild(newTipoLetra);

        newButtonEditar.setAttribute("class", "BtEditar");
        newButtonEliminar.setAttribute("class", "BtEliminar");
        newButtonEditar.setAttribute("onclick", "EditarTarea(event)");
        newButtonEliminar.setAttribute("onclick", "EliminarTarea(event)")


        Newlist.appendChild(newCheck);
        Newlist.appendChild(newText);
        Newlist.appendChild(newButtonEliminar);
        Newlist.appendChild(newButtonEditar);

        list.appendChild(Newlist);

        input.value = "";

    }

}

function EliminarTarea(event){
    const ListaProcesos = document.getElementById("ContenedorProcesos");
    const ProcesoSeleccionado = event.target.parentNode.parentNode;

    ListaProcesos.removeChild(ProcesoSeleccionado);
}

function EditarTarea(event){
    const ListaSeleccionada = event.target.parentNode.parentNode;

    if(!ListaSeleccionada.querySelector(".TextoEditado")){
        const inputTemporal = document.createElement("input");
        inputTemporal.type = "text";
        inputTemporal.setAttribute("class", "TextoEditado");
        inputTemporal.setAttribute("onkeydown", "FinalizarEditado(event)");

        ListaSeleccionada.appendChild(inputTemporal);
    }
}

function FinalizarEditado(event){
    const Tecla = event.key;

    if(Tecla == "Enter"){
        const ListaSeleccionada = event.target.parentNode;

        const TextoNuevo = ListaSeleccionada.querySelector(".TextoEditado");
        const TextoAntiguo = ListaSeleccionada.querySelector("p");

        TextoAntiguo.textContent = TextoNuevo.value;

        ListaSeleccionada.removeChild(TextoNuevo);
    }
}

function EliminarLista(){
    const ListaProcesos = document.getElementById("ContenedorCompletados");
    const EliminarLista = ListaProcesos.querySelector(".ProcesosCompletados");

    ListaProcesos.removeChild(EliminarLista);
}

function CompletarTarea(event){
    const ListaProcesos = document.getElementById("ContenedorProcesos");
    const ProcesoSeleccionado = event.target.parentNode;
    ListaProcesos.removeChild(ProcesoSeleccionado);

    const CompletarTareaProcesos = document.getElementById("ContenedorCompletados");

    const NuevaTareaCompletada = document.createElement("div");
    NuevaTareaCompletada.setAttribute("class", "ProcesosCompletados");

    const NewCheckBoxCompleted = document.createElement("input");
    NewCheckBoxCompleted.setAttribute("class", "ChecksB");
    NewCheckBoxCompleted.type = "checkbox";
    NewCheckBoxCompleted.checked = "true";
    NewCheckBoxCompleted.disabled = "true";

    const NewTextCompleted = document.createElement("p");
    NewTextCompleted.textContent = " " + ProcesoSeleccionado.querySelector("p").textContent;
    NewTextCompleted.setAttribute("class", "ParrafosProcesosCompletados");

    NuevaTareaCompletada.appendChild(NewCheckBoxCompleted);
    NuevaTareaCompletada.appendChild(NewTextCompleted);

    CompletarTareaProcesos.appendChild(NuevaTareaCompletada);
}
