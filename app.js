// Creacion de lista (array)
let amigos= [];
// Funcionalidad del Boton para sortear

const botonSorteo = document.getElementById("sorteo");
const iconoSorteo = document.getElementById('iconoSorteo');

//

//Funcion para agregar amigos
function agregarAmigo() {
    const input= document.getElementById("amigo");
    // eliminar espacios
    const nombre = input.value.trim();

    //alerta si es que no se ha ingresado algun nombre.

    if (nombre === '') {
        alert('Debes ingresar un nombre');
        return;
    }
    //Añade el nombre a la lista.
    amigos.push(nombre);

    //Actualiza la lista
    actualizarLista();
    //Limpia el campo 
    input.value = '';
}

// actualizar lista de amigos

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    
    //recorre la lista de amigos y crea un li
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    
}

// Funcion para sortear amigo

function sortearAmigo() {

    //revisar si la lista contiene mas de 2 elementos (nombre de amigos) y emite alerta,

    if (amigos.length <= 2) {
        alert('Tienes que añadir mas de 2 nombres para sortear');
        return
    }
    //Evalua el estado del boton sortear
    if (botonSorteo.dataset.estado === "reiniciar") {
        reiniciarSorteo();
        return;
    }
    //Genera un indice aleatorio dentro de la lista
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //sortea el nombre del amigo 
    const amigoSorteado = amigos[indiceAleatorio];
    
    //Muestra el amigo sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu Amigo secreto es: ${amigoSorteado}`;
  //Cambia el texto del boton y actuliza su estado
   botonSorteo.innerHTML = "Reiniciar sorteo";
   botonSorteo.dataset.estado = "reiniciar";
}

//Funcion para reiniciar el sorteo.
function reiniciarSorteo() {
     
     
 
    //Limpia la lista de amigos
    amigos.length = 0;

 //Restaurar nombre y estado del boton 
 botonSorteo.innerHTML = "Sortear amigo";
 botonSorteo.dataset.estado = "sortear";
 amigos =[]
}