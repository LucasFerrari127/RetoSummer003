
// Tomo las partes del documento 
let pantallaPrincipal = document.getElementById('principal');
let pantallaCargaItem = document.getElementById('cargaItem');
let pantallaListado = document.getElementById('listado');
let listado = document.getElementById('principal_lista');
let prueba = document.getElementById('prueba');
let pantallaDescripcion = document.getElementById('descripcion');
let lista = document.getElementById('principal_lista');
let boton2 = document.getElementById('boton2');

// creo variables para los iconos.
let carne = '<i class="fas fa-drumstick-bite verde" es="no"></i>'
let verdura = '<i class="fas fa-seedling verde" es="no"></i>'
let fruta = '<i class="fas fa-apple-alt verde" es="no"></i>'
let panaderia = '<i class="fas fa-bread-slice verde" es="no"></i>'
let bebida = '<i class="fas fa-wine-bottle verde" es="no"></i>'
let limpieza = '<i class="fas fa-hand-sparkles verde" es="no"></i>'
let otros = '<i class="fas fa-globe verde" es="no"></i>'

// tomo los datos del model
let item = document.getElementById('carga_item');
let grupo = document.getElementById('carga_grupoItem');
let descripcionItem = document.getElementById('principal_descripcion');

// busco la posición de los elementos de la pantalla descripción

let descItem = document.getElementById('descItem');
let descGrupo = document.getElementById('descGrupo');
let descDesc = document.getElementById('descDesc');

// deteccion de mediaquery

var mediaqueryList = window.matchMedia("(min-width: 720px)");

// funcion para volver de la descripción
let volver = document.getElementById('botonVolver').addEventListener('click', function(){
    pantallaDescripcion.style.display = 'none';
    pantallaListado.style.display = 'block';
    pantallaCargaItem.style.display = 'block';

    if (mediaqueryList.matches){
        boton2.style.display = 'block';
    } else {
        boton2.style.display = 'none';
    }
})

mediaqueryList.addListener( function(EventoMediaQueryList) {
    if(EventoMediaQueryList.matches) {
        boton2.style.display = 'block';
    } else {
        boton2.style.display = 'none';
    }
  });

// funcion para cargar un nuevo item.
let cargar = document.getElementById('botonCargar').addEventListener('click', function(){


    if (item.value == '') {
        alert ('No Completaste el campo Item!!')
        return
    }
    pantallaPrincipal.style.display = 'none';
    pantallaListado.style.display = 'block';
    pantallaCargaItem.style.display = 'block';

    if(grupo.value == 1 ) { 
        listado.innerHTML += `<li class="list-group-item separado" es="si"  item="${item.value}" grupo="${grupo.value}" descripcion="${descripcionItem.value}">${carne}<p class="itemInterior" es="no">${item.value}</p><i class="fas fa-chevron-right derecha verde" es="no"></i></li>`
    } else if(grupo.value == 2) {
        listado.innerHTML += `<li class="list-group-item separado" es="si"  item="${item.value}" grupo="${grupo.value}" descripcion="${descripcionItem.value}">${verdura}<p class="itemInterior" es="no">${item.value}</p><i class="fas fa-chevron-right derecha verde" es="no"></i></li>`
    } else if(grupo.value == 3) {
        listado.innerHTML += `<li class="list-group-item separado" es="si"  item="${item.value}" grupo="${grupo.value}" descripcion="${descripcionItem.value}">${fruta}<p class="itemInterior" es="no">${item.value}</p><i class="fas fa-chevron-right derecha verde" es="no"></i></li>`
    } else if(grupo.value == 4) {
        listado.innerHTML += `<li class="list-group-item separado" es="si"  item="${item.value}" grupo="${grupo.value}" descripcion="${descripcionItem.value}">${panaderia}<p class="itemInterior" es="no">${item.value}</p><i class="fas fa-chevron-right derecha verde" es="no"></i></li>`
    } else if(grupo.value == 5) {
        listado.innerHTML += `<li class="list-group-item separado" es="si"  item="${item.value}" grupo="${grupo.value}" descripcion="${descripcionItem.value}">${bebida}<p class="itemInterior" es="no">${item.value}</p><i class="fas fa-chevron-right derecha verde" es="no"></i></li>`
    } else if(grupo.value == 6) {
        listado.innerHTML += `<li class="list-group-item separado" es="si"  item="${item.value}" grupo="${grupo.value}" descripcion="${descripcionItem.value}">${limpieza}<p class="itemInterior" es="no">${item.value}</p><i class="fas fa-chevron-right derecha verde" es="no"></i></li>`
    } else {
        listado.innerHTML += `<li class="list-group-item separado" es="si" item="${item.value}" grupo="${grupo.value}" descripcion="${descripcionItem.value}">${otros}<p class="itemInterior" es="no">${item.value}</p><i class="fas fa-chevron-right derecha verde" es="no"></i></li>`
    }

    item.value = '';
    grupo.value = 0;
    descripcionItem.value = '';

})

//funcion para que el boton cerrar del model vacie los valores.

let cerrar = document.getElementById('botonCerrar').addEventListener('click', function(){
    item.value = '';
    grupo.value = 0;
    descripcionItem.value = '';
})

// funcion para ver la descripción del producto

let elemento = "";

let verDescripcion = document.getElementById('listado').addEventListener('click', function(evento){


    if ( evento.target.getAttribute('es') == "si") {

        elemento = evento.target;
        descItem.innerText = evento.target.getAttribute('item');
        descDesc.innerText = evento.target.getAttribute('descripcion');

        if ( evento.target.getAttribute('grupo') == 1 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${carne} Carne</h4>`
        } else if ( evento.target.getAttribute('grupo') == 2 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${verdura} Verdura</h4>`
        } else if ( evento.target.getAttribute('grupo') == 3 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${fruta} Fruta</h4>`
        } else if ( evento.target.getAttribute('grupo') == 4 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${panaderia} Panadería</h4>`
        } else if ( evento.target.getAttribute('grupo') == 5 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${bebida} Bebida</h4>`
        } else if ( evento.target.getAttribute('grupo') == 6 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${limpieza} Limpieza</h4>`
        } else {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${otros} Otros</h4>`
        }
    } else  {

        elemento = evento.target.parentNode;
        descItem.innerText = evento.target.parentNode.getAttribute('item');
        descDesc.innerText = evento.target.parentNode.getAttribute('descripcion');

        if ( evento.target.parentNode.getAttribute('grupo') == 1 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${carne} Carne</h4>`
        } else if ( evento.target.parentNode.getAttribute('grupo') == 2 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${verdura} Verdura</h4>`
        } else if ( evento.target.parentNode.getAttribute('grupo') == 3 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${fruta} Fruta</h4>`
        } else if ( evento.target.parentNode.getAttribute('grupo') == 4 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${panaderia} Panadería</h4>`
        } else if ( evento.target.parentNode.getAttribute('grupo') == 5 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${bebida} Bebida</h4>`
        } else if ( evento.target.parentNode.getAttribute('grupo') == 6 ) {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${limpieza} Limpieza</h4>`
        } else {
            descGrupo.innerHTML = `<h4 class="card-subtitle mb-2 text-muted" id="descGrupo">${otros} Otros</h4>`
        }
    }


    pantallaCargaItem.style.display = 'none';
    pantallaListado.style.display = 'none';
    pantallaDescripcion.style.display = 'block';
    boton2.style.display = 'none';

})


