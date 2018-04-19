const ajax = new XMLHttpRequest();
const objDiv = document.getElementById("desc")
const URL = "BookController?idLibro = "
function mostrarDescripcion() {
    const combo = document.getElementById("libros")
    const selec = combo.selectedIndex - 1
    if(selec == -1){
        objDiv.innerHTML = ""
        return false
    }else{
        const idLibro = combo.selectedIndex - 1
        ajax.open("GET",URL + selec, true);
        ajax.onreadystatechange = procesarRespuesta
        ajax.send(null);
    }

}

function procesarRespuesta() {
    if(ajax.readyState === 4){
        if(ajax.status === 200){
            const description = ajax.responseText
            paintDescription(description)
        }
    }
}

function paintDescription(description) {

    objDiv.innerHTML = description
}