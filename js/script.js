const listacursos = document.querySelector('.list-cursos')
const cursos = document.querySelector('.cursos')


initAPP();
document.addEventListener('load',initAPP)

function initAPP(){

    listacursos.addEventListener('click', obtenerCursos)
    cursos.addEventListener("click",eminarcurso)
}

function obtenerCursos(e){
  
    if(e.target.classList.contains('agregarCarrito')){
        const curso = e.target.parentElement

        estraerDatos(curso)
    }
}

function estraerDatos(curso){
    const cursoelegido= {
        imagen : curso.querySelector('img').src, 
        nombre :curso.querySelector('h2').textContent,
        precio :curso.querySelector('h4').textContent,
        id: curso.querySelector('button').getAttribute('data-id'),
        cantidad : 1
    }
    pintarCurso(cursoelegido)
}

function pintarCurso(curso){
    let container =document.createElement('tr');
    let imagen= document.createElement('img');
    let nombre = document.createElement('p');
    let precio = document.createElement('p');
   
    imagen = curso.imagen
    nombre = curso.nombre;
    precio = curso.precio;

    container.innerHTML =`
       <div class="cursi"> <td margin="5px"> <h5>imagen</h5></td>  <td> <h5>curso</h5> </td>  <td><h5>precio</h5> </td> </div>
        <div>  
        <td><img src="${imagen}" width =30></td>
        
       <td> <p>${nombre}</p></td>
       
        <td><p> ${precio}</p></td>
        
        
        </div>
        <td><button  class="borrar-curso" type="button" data-id="${curso.id}"> X</button></td>

        
    `
      
    cursos.appendChild(container)
}

function eminarcurso(e){
    e.preventDefault();

    if(e.target.classList.contains("borrar-curso")){
      console.log(e.target.parentElement.parentElement.remove());
    }
}

